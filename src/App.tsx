import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route 
} from 'react-router-dom';
import { NAVIGATION } from './constants/constants';

import Container from '@mui/material/Container';
import HeaderApp from './layout/HeaderApp';
import MainApp from './layout/MainApp';
import Loading from './components/Loading/Loading';

const Home = React.lazy(() => import('./pages/Home'));
const Search = React.lazy(() => import('./pages/Search'));
const MyList = React.lazy(() => import('./pages/MyList'));

function App() {
  return (
    <Router>
      <HeaderApp />
      <Container disableGutters>
        <Suspense fallback={<Loading />}>
          <MainApp>
            <Routes>
              <Route path={NAVIGATION.HOME.path} element={<Home />} />
              <Route path={NAVIGATION.SEARCH.path} element={<Search />} />
              <Route path={NAVIGATION.MY_LIST.path} element={<MyList />} />
            </Routes>
          </MainApp>
        </Suspense>
      </Container>
    </Router>
  );
}

export default App;
