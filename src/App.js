import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import About from './Pages/About/About';
import AddPackage from './Pages/AddPackage/AddPackage';
import Home from './Pages/Home/Home/Home';
import OfferDetail from './Pages/Home/OfferDetail/OfferDetail';
import Offers from './Pages/Home/Offers/Offers';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import ManageBooked from './Pages/ManageBooked/ManageBooked';
import MyBooked from './Pages/MyBooked/MyBooked';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>

          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/packages">
              <Offers></Offers>
            </Route>

            <Route path="/bookedPackage">
              <MyBooked></MyBooked>
            </Route>

            <Route path="/manageBooked">
              <ManageBooked></ManageBooked>
            </Route>

            <PrivateRoute path="/service/:serviceId">
              <OfferDetail></OfferDetail>
            </PrivateRoute>

            <Route path="/about">
              <About></About>
            </Route>

            <Route path="/addPackage">
              <AddPackage></AddPackage>
            </Route>


            <Route path="/login">
              <Login></Login>
            </Route>

            <Route path="*">
              <NotFound></NotFound>
            </Route>

          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
