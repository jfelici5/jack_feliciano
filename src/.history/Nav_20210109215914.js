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
                Projects
            </li>
            <li>
                Photos
            </li>
        </ul>
        </div>
        <div className = "logo">
            <h1>
                C: jack_feliciano>home
            </h1>
        </div>
    </nav>
  );
}

export default Nav;
