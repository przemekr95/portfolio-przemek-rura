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
          <Route path="/"><Portfolio/></Route>
          <Route path="/"><Contact/></Route>
        </Switch>
        <About/>
        <Portfolio/>
        <Contact/>
    </Router>
    
  </>
  );
}

export default App;
