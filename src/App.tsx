import {
  BrowserRouter as Router,
  Routes,
  Route 
} from "react-router-dom";

import HeaderApp from "./layout/HeaderApp";
import MainApp from "./layout/MainApp";
import Home from "./pages/Home";
import Search from "./pages/Search";
import MyList from "./pages/MyList";

import './styles/app.scss';
import { NAVIGATION } from "./constants/constants";

function App() {
  return (
    <div className="wrapper">
        <Router>
          <HeaderApp />
          <MainApp>
              <Routes>
                <Route path={NAVIGATION.HOME.path} element={<Home />} />
                <Route path={NAVIGATION.SEARCH.path} element={<Search />} />
                <Route path={NAVIGATION.MY_LIST.path} element={<MyList />} />
              </Routes>
          </MainApp>
        </Router>
    </div>
  );
}

export default App;
