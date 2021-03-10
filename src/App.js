import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import './App.css';

import FormProducts from './components/admin/FormProducts';
import ListProducts from './components/admin/ListProducts';
import FormKit from './components/admin/FormKit.jsx';
import Navbar from './components/Navbar'
import Home from './components/user/Home';
import CategoryDetail from './components/user/CategoryDetail';
import ProductDetail from './components/user/ProductDetail';
import KitDetail from './components/user/KitDetail';
import CartState from './context/cart/CartState';
import Cartshop from './components/user/Cartshop';
import AllProducts from './components/user/AllProducts';
import Login from './components/user/Login';
import SignUp from './components/user/SignUp';



  


 

function App() {
  return (
   
      <CartState>
        
        <Router>
          <Navbar />
        <Switch>
          {/* ADMIN */}
          <Route exact path="/create" component={FormProducts}/>
          <Route exact path="/admin/dashboard" component={ListProducts}/>
          <Route exact path="/admin/kits" component={FormKit}/>
          <Route exact path="/admin/edit/:id" component={FormProducts}/>
          {/* USER */}
          <Route exact path="/" component={Home}/>
          <Route exact path="/categoria/:categoria" component={CategoryDetail}/>
          <Route exact path="/producto/:producto" component={ProductDetail}/>
          <Route exact path="/kit/:id" component={KitDetail}/>
          <Route exact path="/cart" component={Cartshop}/>
          <Route exact path="/all" component={AllProducts}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/signup" component={SignUp}/>
        </Switch>
      </Router>
     
      </CartState>
    
    
  );
}

export default App;
