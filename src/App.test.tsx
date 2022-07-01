import * as React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import {
  BrowserRouter as Router,
  Routes,
  Route, 
  NavLink, 
  useLocation,
} from 'react-router-dom';

import { render, screen } from '@testing-library/react';
import { act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './App';
import HeaderApp from './layout/HeaderApp';
import MainApp from './layout/MainApp';
import Home from './pages/Home';
import Search from './pages/Search';
import MyList from './pages/MyList';
import Loading from "./components/Atoms/Loading/Loading";

import { NAVIGATION } from './constants/constants';

const appProvider = (ui: React.ReactElement) => (<Provider store={store}>{ui}</Provider>);

describe('App rendering tests', () => {

  test('renders App component', async () => {
    let container;
    await act(async () => {
      const {baseElement} = render(appProvider(<App />));
      container = baseElement;
    });
    expect(container).toBe(document.body);
    const logoElement = screen.getByText(/MovieSearcher/i);
    expect(logoElement).toBeInTheDocument();
    const linkHome = screen.getByText(/Home/i);
    expect(linkHome).toBeInTheDocument();
  });

  test('renders HeaderApp component', async () => {
    let container;
    await act(async () => {
      const {baseElement} = render(appProvider(
        <div className="wrapper">
          <Router>
            <HeaderApp />
          </Router>
        </div>
      ));
      container = baseElement;
    });
    expect(container).toBe(document.body);
  });

  test('renders MainApp component', async () => {
    let container;
    await act(async () => {
      const {baseElement} = render(appProvider(
        <div className="wrapper">
          <Router>
            <MainApp>
              <div></div>
            </MainApp>
          </Router>
        </div>
      ));
      container = baseElement;
    });
    expect(container).toBe(document.body);
  });

});

describe('Router tests', () => {

  const HOME_LINK = `${NAVIGATION.HOME.path}`;
  const SEARCH_LINK = `${NAVIGATION.SEARCH.path}`;
  const MY_LIST_LINK = `${NAVIGATION.MY_LIST.path}`;
  const HOME_TEXT = `${NAVIGATION.HOME.text}`;
  const SEARCH_TEXT = `${NAVIGATION.SEARCH.text}`;
  const MY_LIST_TEXT = `${NAVIGATION.MY_LIST.text}`;

  const LocationDisplay = () => {
    const location = useLocation();
    return <div data-testid="location-display">{location.pathname}</div>;
  };

  const App = () => (
    <div>
      <NavLink to={HOME_LINK}>{HOME_TEXT}</NavLink>
      <NavLink to={SEARCH_LINK}>{SEARCH_TEXT}</NavLink>
      <NavLink to={MY_LIST_LINK}>{MY_LIST_TEXT}</NavLink>

      <Routes>
        <Route path={HOME_LINK} element={<Home />} />
        <Route path={SEARCH_LINK} element={<Search />} />
        <Route path={MY_LIST_LINK} element={<MyList />} />
      </Routes>

      <LocationDisplay />
    </div>
  );

  const routeRender = (ui: any, {route = '/'} = {}) => {
    window.history.pushState({}, 'Test page', route);
    return render(ui, {wrapper: Router});
  };

  test('renders App and changes page by clicking', async () => {
    await act(async () => {
      routeRender(appProvider(<App />));
    });
    expect(screen.getByText(/Search/i)).toBeInTheDocument();

    userEvent.click(screen.getByText(/My List/i));
    expect(screen.getByText(/My MoviesList/i)).toBeInTheDocument();
  });

  test('renders Home when url does not match', async () => {
    await act(async () => {
      routeRender(appProvider(<App />), {route: '/something-that-does-not-match'});
    });
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
  });

  test('rendering a component that uses useLocation', async () => {
    const route = '/myList';
    await act(async () => {
      routeRender(<LocationDisplay />, {route});
    });
    expect(screen.getByTestId('location-display')).toHaveTextContent(route);
  });

});

describe('Lazy loading test', () => {
  
  const LazyComponent = React.lazy(() => import('./pages/Home'));

  function LazyTest() {
    return (
      <div>
        <LazyComponent />
      </div>
    );
  };

  function AppLazyTest() {
    return (
      <React.Suspense fallback={<Loading />}>
        <LazyTest />
      </React.Suspense>
    );
  };

  test('app renders lazy the Home component', async () => {
    await act(async () => {
      render(appProvider(<AppLazyTest />));
    });
    const lazyElement = await screen.findByText(/The most popular/i);
    expect(lazyElement).toBeInTheDocument();
  });

});
