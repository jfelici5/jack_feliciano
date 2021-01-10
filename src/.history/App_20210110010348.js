import logo from './logo.svg';
import './App.css';
import Nav from './Nav'
import Photos from './Photos'
import Home from './Home'
import Resume from './Resume'
import Foot from './Foot'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className = "boody">
      <Nav/>
      <Switch>
      <Route path = "/" exact component = {Home}/>
      <Route path = "/resume" exact component = {Resume}/>
      <Route path = "/photos" exact component = {Photos}/>
      </Switch>
      <Foot/>
    </div>
    </Router>
  );
}

export default App;
