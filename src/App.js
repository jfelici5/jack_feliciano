import logo from './logo.svg';
import './App.css';
import Nav from './Nav'
import Photos from './Photos'
import Home from './Home'
import Resume from './Resume'
import Foot from './Foot'
import Projects from './Projects'
import Incline from './Incline'
import USOpen from './USOpen'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className = "realb">
    <div className = "boody">
      <Nav/>
      <Switch>
      <Route path = "/jack_feliciano/" exact component = {Home}/>
      <Route path = "/jack_feliciano/resume" exact component = {Resume}/>
      {/* <Route path = "/projects" exact component = {Projects}/> */}
      <Route path = "/jack_feliciano/photos" exact component = {Photos}/>
      <Route path = "/jack_feliciano/photos/incline" exact component = {Incline}/>
      <Route path = "/jack_feliciano/photos/usopen" exact component = {USOpen}/>

      </Switch>
      <Foot/>
    </div>
    </div>
    </Router>
  );
}

export default App;
