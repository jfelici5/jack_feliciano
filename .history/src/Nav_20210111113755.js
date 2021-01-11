import {Link} from 'react-router-dom';
import './App.css';
import {HashLink} from 'react-router-hash-link'

function Nav() {
  return (
    <div>
        <div className = 'nav-links'>
            <h2 className = 'words'> 
            <Link to = "/" style = {{textDecoration: 'none', color: "black"}}><p className = "home">Home</p></Link>
            </h2> 
            <h2 className = 'words'> 
            <Link to = "/resume" style = {{textDecoration: 'none', color: "black"}}><p className = "resume">Resume</p></Link>
                <HashLink to = "/resume#education" style = {{textDecoration: 'none'}}><p style = {{color: "blue"}}>Education</p></HashLink>
                <HashLink to = "/resume#skills" style = {{textDecoration: 'none'}}><p style = {{color: "blue"}}>Skills</p></HashLink>
                <HashLink to = "/resume#experience" style = {{textDecoration: 'none'}}><p style = {{color: "blue"}}>Experience</p></HashLink>                
                <HashLink to = "/resume#leadership" style = {{textDecoration: 'none'}}><p style = {{color: "blue"}}>Leadership</p></HashLink>
                <p className = "pdf" style = {{color: "blue"}}>Load as PDF</p>
            </h2>
            <h2 className = 'words'> 
            <Link to = "/projects" style = {{textDecoration: 'none', color: "black"}}><p className = "projects">Projects</p></Link>            <p style = {{color: "blue"}}>2048</p>
            <p style = {{color: "blue"}}>urafterhours</p>
            </h2>
            <h2 className = 'words'> 
            <Link to = "/photos" style = {{textDecoration: 'none', color: "black"}}><p className = "gallery">Gallery</p></Link>            <p  className = "city"style = {{color: "blue"}}>San Francisco</p>
            </h2>
        
        </div>
        <div className = 'nav-links'><h2 className = 'words'> 
            <Link to = "/" style = {{textDecoration: 'none', color: "black"}}><p className = "home">Dark Mode</p></Link>
            </h2> </div>
        <hr></hr>
    </div>
  );
}

export default Nav;
