import logo from './logo.svg';
import './App.css';
import Nav from './Nav'
import Photos from './Photos'
import Home from './Home'
import Resume from './Resume'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <Nav/>
    </div>
  );
}

export default App;
