import logo from './logo.svg';
import './App.css';
import Nav from './Nav'
import Photos from './Photos'
import Home from './Home'
import Resume from './Resume'
import Foot from './Foot'
import Projects from './Projects'
import Incline from './Incline'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className = "realb">
    <div className = "boody">
      <Nav/>
      <Switch>
      <Route path = "/" exact component = {Home}/>
      <Route path = "/resume" exact component = {Resume}/>
      <Route path = "/projects" exact component = {Projects}/>
      <Route path = "/photos" exact component = {Photos}/>
      <Route path = "/photos/incline" exact component = {Incline}/>
      </Switch>
      <Foot/>
    </div>
    </div>
    </Router>
  );
}

export default App;
