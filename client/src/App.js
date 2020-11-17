import './App.css';
import { Router, Link } from '@reach/router';
import Main from './views/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import OneProduct from './views/OneProduct';
import UpdateProduct from './views/UpdateProduct';


function App() {
  return (
    <div className="App">
      <h1>Product Manager!</h1>  
      <Link to="/"><h4>Home</h4></Link>
      <br/>
      <Router>
        <Main path="/"/>
        <OneProduct path="/:_id"/>
        <UpdateProduct path="/products/update/:_id"/>
      </Router>
    </div>
  );
}

export default App;
