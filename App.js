import './App.css';
import Product from './Components/Product'
import About from './Components/About'
import Contact from './Components/Contact'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/product">
          <Product />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path exact="/">
          <Product />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
