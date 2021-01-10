
import './App.css';

function Nav() {
  return (
    <div>
        <hr></hr>
        <div className = "logo">
            <h1>
                C:jack_feliciano\home
            </h1>
        </div>
        <div className = 'nav-links'>
            <h2 className = 'words'> 
            <p className = "home">Home</p>            </h2>
            <h2 className = 'words'> 
                <p className = "resume">Resume</p>
                <p style = {{color: "blue"}}>Education</p>
                <p style = {{color: "blue"}}>Experience</p>
                <p style = {{color: "blue"}}>Skills</p>
                <p className = "leadership"style = {{color: "blue"}}>Leadership</p>
                <p className = "pdf" style = {{color: "blue"}}>Load as PDF</p>
            </h2>
            <h2 className = 'words'> 
            <p className = "projects">Projects</p>
            <p style = {{color: "blue"}}>2048</p>
            <p style = {{color: "blue"}}>urafterhours</p>
            </h2>
            <h2 className = 'words'> 
            <p className = "gallery">Gallery</p>
            <p className = "city"style = {{color: "blue"}}>Walnut Creek</p>
            <p  className = "city"style = {{color: "blue"}}>San Francisco</p>
            </h2>
        
        </div>
        <hr></hr>
    </div>
  );
}

export default Nav;
