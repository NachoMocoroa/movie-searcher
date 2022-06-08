import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route 
} from "react-router-dom";

import HeaderApp from "./layout/HeaderApp";
import MainApp from "./layout/MainApp";
import Loading from "./components/Loading/Loading";

import './styles/app.scss';
import { NAVIGATION } from "./constants/constants";

const Home = React.lazy(() => import('./pages/Home'));
const Search = React.lazy(() => import('./pages/Search'));
const MyList = React.lazy(() => import('./pages/MyList'));

function App() {
  return (
    <div className="wrapper">
      <Router>
        <HeaderApp />
        <Suspense fallback={<Loading />}>
          <MainApp>
              <Routes>
                <Route path={NAVIGATION.HOME.path} element={<Home />} />
                <Route path={NAVIGATION.SEARCH.path} element={<Search />} />
                <Route path={NAVIGATION.MY_LIST.path} element={<MyList />} />
              </Routes>
          </MainApp>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
