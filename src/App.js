import './App.css';
import HamburgerMenu from './components/HamburgerMenu/HamburgerMenu';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';
import Portfolio from './components/pages/Portfolio/Portfolio';
import Contact from './components/pages/Contact/Contact';

function App() {
  return (
  <>
    <Router basename={process.env.PUBLIC_URL}>
      <HamburgerMenu/>
        <Switch>
          <Route exact path="/"><Home/></Route>
          <Route path="/about"><About/></Route>
          <Route path="/portfolio"><Portfolio/></Route>
          <Route path="/contact"><Contact/></Route>
        </Switch>
    </Router>
    
  </>
  );
}

export default App;
