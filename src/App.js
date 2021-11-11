import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './Contexts/AuthProvider';
import Explore from './Pages/Explore/Explore';
import Home from './Pages/Home/Home/Home';
import LoginSignup from './Pages/LoginSignup/LoginSignup';
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
          <Route path="/product/:id">
            <ProductDetails></ProductDetails>
          </Route>

        </Switch>
      </BrowserRouter>

    </AuthProvider>
  );
}

export default App;
