import {Link} from 'react-router-dom';
import './App.css';

function Nav() {
  return (
    <div>
        <div className = 'nav-links'>
            <h2 className = 'words'> 
            <Link to = "/"><p className = "home">Home</p></Link>            </h2>
            <h2 className = 'words'> 
                <Link to = "/resume"><p className = "resume">Resume</p></Link>
                <p style = {{color: "blue"}}>Education</p>
                <p style = {{color: "blue"}}>Experience</p>
                <p style = {{color: "blue"}}>Skills</p>
                <p className = "leadership"style = {{color: "blue"}}>Leadership</p>
                <p className = "pdf" style = {{color: "blue"}}>Load as PDF</p>
            </h2>
            <h2 className = 'words'> 
            <Link to = "/projects"><p className = "projects">Projects</p></Link>
            <p style = {{color: "blue"}}>2048</p>
            <p style = {{color: "blue"}}>urafterhours</p>
            </h2>
            <h2 className = 'words'> 
            <Link to = "/photos"><p className = "gallery">Gallery</p></Link>            <p className = "city"style = {{color: "blue"}}>Walnut Creek</p>
            <p  className = "city"style = {{color: "blue"}}>San Francisco</p>
            </h2>
        
        </div>
        <hr></hr>
    </div>
  );
}

export default Nav;
