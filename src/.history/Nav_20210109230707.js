
import './App.css';

function Nav() {
  return (
    <div>
        <hr></hr>
        <div className = "logo">
            <h1>
                C: jack_feliciano\home
            </h1>
        </div>
        <div className = 'nav-links'>
            <h2 className = 'words'> 
                Home
            </h2>
            <h2 className = 'words'> 
                <p style = {{color: "black"}}>Resume</p>
                <p style = {{color: "black"}}>Resume</p>
                <p style = {{color: "black"}}>Resume</p>
                <p style = {{color: "black"}}>Resume</p>
                
                Education 
                Experience
                Languages
                Leadership
            </h2>
            <h2 className = 'words'> 
                Projects <br/>
                2048 <br/>
                urafterhours <br/>
                
                
            </h2>
            <h2 className = 'words'> 
                Gallery
            </h2>
        
        </div>
        <hr></hr>
    </div>
  );
}

export default Nav;
