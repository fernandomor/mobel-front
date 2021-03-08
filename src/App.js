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



  


 

function App() {
  return (
    <div className="App">
      
        <Router>
          <Navbar />
        <Switch>
          <Route exact path="/create" component={FormProducts}/>
          <Route exact path="/admin/dashboard" component={ListProducts}/>
          <Route exact path="/admin/kits" component={FormKit}/>
          <Route exact path="/admin/edit/:id" component={FormProducts}/>
          <Route exact path="/" component={Home}/>
          <Route exact path="/:categoria" component={CategoryDetail}/>
        </Switch>
      </Router>
     
    
    </div>
  );
}

export default App;
