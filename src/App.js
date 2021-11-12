import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './Contexts/AuthProvider';
import DashBoard from './Pages/DashBoard/Dashboard/DashBoard';
import Explore from './Pages/Explore/Explore';
import Home from './Pages/Home/Home/Home';
import LoginSignup from './Pages/LoginSignup/LoginSignup';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import ProductDetails from './Pages/ProductDetails/ProductDetails';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/explore">
            <Explore></Explore>
          </Route>
          <Route path="/loginsignup">
            <LoginSignup></LoginSignup>
          </Route>
          <PrivateRoute path="/product/:id">
            <ProductDetails></ProductDetails>
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <DashBoard></DashBoard>
          </PrivateRoute>

        </Switch>
      </BrowserRouter>

    </AuthProvider>
  );
}

export default App;
