import logo from './logo.svg';
import './App.css';
import Nav from './Nav'
import Photos from './Photos'
import Home from './Home'
import Resume from './Resume'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div>
      <Nav/>
      <Switch>
      <Route path = "/" component = {Home}/>
      <Route path = "/resume" component = {Resume}/>
      <Route path = "/photos" component = {Photos}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
