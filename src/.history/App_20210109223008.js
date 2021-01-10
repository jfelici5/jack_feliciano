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
      <Route exactpath = "/" component = {Home}>
      <Route exactpath = "/resume" component = {Resume}/>
      <Resume exactpath = "/photos" component = {Photos}/>
    </div>
    </Router>
  );
}

export default App;
