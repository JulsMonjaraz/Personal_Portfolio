import './App.css';
import { Link, BrowserRouter as Router,Switch, Route } from "react-router-dom";
import HeroSection from './Components/Pages/HeroSection';
import About from './Components/Pages/About';
import Proyects from './Components/Pages/Proyects';
import Home from './Components/Pages/Home';

function App() {
  return (
    <Router> 
     <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/hero' exact component={HeroSection} />
          <Route path='/proyects' component={Proyects} />
          <Route path='/about' component={About} />
        </Switch>
    </Router>

  );  
}

export default App;
