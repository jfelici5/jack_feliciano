import logo from './logo.svg';
import './App.css';

function Nav() {
  return (
    <nav>
        <div>
            <ul className = 'nav-links'>
            <li>
                Home
            </li>
            <li>
                Resume
            </li>
            <li>
                Photos
            </li>
        </ul>
        </div>
        <div>
            <h1>
                jack_feliciano
            </h1>
        </div>
    </nav>
  );
}

export default Nav;
