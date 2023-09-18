import {BrowserRouter, Link} from 'react-router-dom';
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
  // var $nav5 = $(".projects");
  var $nav6 = $(".resume");
  // var $nav7 = $(".dark");
  
  $nav.toggleClass(theme, darkMode === 'true');
  $nav2.toggleClass(theme, darkMode === 'true');
  $nav3.toggleClass(theme, darkMode === 'true');
  $nav4.toggleClass(theme, darkMode === 'true');
  // $nav5.toggleClass(theme, darkMode === 'true');
  $nav6.toggleClass(theme, darkMode === 'true');
  // $nav7.toggleClass(theme, darkMode === 'true');
  
}

function Nav() {
  return (
    <>
        <div className = "nav-left">
        <hr></hr>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Link to = "/" style = {{textDecoration: 'none', color: "black"}}><div style = {{fontFamily: "Helvetica Neue", fontSize: 45 + 'px', fontStyle: "bold"}}>JACK <span style = {{fontFamily: "skinny"}}>feliciano</span></div></Link>
        </BrowserRouter>
        
        <div className = 'nav-links'>
            <h2 className = 'words'> 
            <BrowserRouter basename={process.env.PUBLIC_URL}>
              <Link to = "/" style = {{textDecoration: 'none', color: "black"}}><p className = "home">Home</p></Link>
            </BrowserRouter>
            </h2> 
            <h2 className = 'words'> 
            <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Link to = "/resume" style = {{textDecoration: 'none', color: "black"}}><p className = "resume">Resume</p></Link>
            </BrowserRouter>
              <HashLink to = "/resume#education" style = {{textDecoration: 'none'}}><p style = {{color: "blue"}}>Education</p></HashLink>

            <BrowserRouter basename={process.env.PUBLIC_URL}>
              <HashLink to = "/resume#skills" style = {{textDecoration: 'none'}}><p style = {{color: "blue"}}>Skills</p></HashLink>
            </BrowserRouter>
            <BrowserRouter basename={process.env.PUBLIC_URL}>
              <HashLink to = "/resume#experience" style = {{textDecoration: 'none'}}><p style = {{color: "blue"}}>Experience</p></HashLink>                
            </BrowserRouter>
            </h2>
            {/* <h2 className = 'words'>  */}
            {/* <Link to = "/projects" style = {{textDecoration: 'none', color: "black"}}><p className = "projects">Projects</p></Link>            <p style = {{color: "blue"}}>2048</p>
            <p style = {{color: "blue"}}>urafterhours</p>
            </h2> */}
            <h2 className = 'words'> 
            <BrowserRouter basename={process.env.PUBLIC_URL}>
              <Link to = "/photos" style = {{textDecoration: 'none', color: "black"}}><p className = "gallery">Blogs</p></Link>            
            </BrowserRouter>
            <BrowserRouter basename={process.env.PUBLIC_URL}> 
              <Link to = "/photos/incline" style = {{textDecoration: 'none'}}><p  className = "city"style = {{color: "blue"}}>Incline Village</p></Link>
            </BrowserRouter>
            <BrowserRouter basename={process.env.PUBLIC_URL}>
              <Link to = "/photos/usopen" style = {{textDecoration: 'none'}}><p  className = "city"style = {{color: "blue"}}>US Open</p></Link>
            </BrowserRouter>

            </h2>
            {/* <h2 className = 'words'> 
            <button onClick = {myFunction} style = {{textDecoration: 'none', color: "black"}}><p className = "dark">Dark Mode</p></button>     
            </h2> */}
            </div>
        </div>
    <hr></hr>
    </>
  );
}

export default Nav;
