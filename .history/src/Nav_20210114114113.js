import {Link} from 'react-router-dom';
import './App.css';
import {HashLink} from 'react-router-hash-link'
import $ from 'jquery'

function myFunction() {
  const theme = '.dark-mode';
  const darkMode = localStorage.getItem(theme);
  var $nav = $(".boody");
  var $nav2 = $(".realb");
  var $nav3 = $(".home");
  var $nav4 = $(".gallery");
  var $nav5 = $(".projects");
  var $nav6 = $(".resume");
  var $nav7 = $(".dark");
  
  $nav.toggleClass(theme, darkMode === 'true');
  $nav2.toggleClass(theme, darkMode === 'true');
  $nav3.toggleClass(theme, darkMode === 'true');
  $nav4.toggleClass(theme, darkMode === 'true');
  $nav5.toggleClass(theme, darkMode === 'true');
  $nav6.toggleClass(theme, darkMode === 'true');
  $nav7.toggleClass(theme, darkMode === 'true');
  
}

function Nav() {
  return (
    <div>
      <hr></hr>
      
        <div style = {{fontFamily: "Playbill", fontSize: 65 + 'px', fontStyle: "bold"}}>JACK feliciano
        <svg className = "coolers"viewBox="0 150 150 150" xmlns="http://www.w3.org/2000/svg">
  <path fill="#FF0066" d="M50.1,-12.6C59.2,11.7,56.8,43.3,43.2,51.3C29.6,59.2,4.7,43.5,-13.8,27.9C-32.4,12.3,-44.6,-3.1,-41.3,-19.4C-37.9,-35.8,-19,-53.1,0.8,-53.4C20.5,-53.6,41,-36.8,50.1,-12.6Z" transform="translate(100 100)" />
</svg></div>
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
            <h2 className = 'words'> 
            <button onClick = {myFunction} style = {{textDecoration: 'none', color: "black"}}><p className = "dark">Dark Mode</p></button>     
            </h2>
        
        </div>
      
        
    <hr></hr>
    </div>
  );
}

export default Nav;
