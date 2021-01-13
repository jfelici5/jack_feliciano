import './App.css';
import './Projects.css';

function Projects() {
  return (
    <div>
        <div className = "project-tile">
            <div className = "image-tile">
                <div className = "img"></div>
            </div>
            <div className = "gap-tile"></div>
            <div className = "info-tile">
                <h1>urafterhours.com</h1>
                <h2>React, JavaScript, jquery, HTML/CSS, Heroku</h2>
                <p>A desktop website for the premier a cappella group at University of Rochester</p>
            </div>
        </div>
        <hr></hr>
        <div className = "project-tile">
            <div className = "image-tile">
                <div className = "img"></div>
            </div>
            <div className = "gap-tile"></div>
            <div className = "info-tile">
                <h1>urafterhours.com</h1>
                <h2>React, JavaScript, jquery, HTML/CSS, Heroku</h2>
                <p>A desktop website for the premier a cappella group at University of Rochester</p>
            </div>
        </div>
        
    </div>
  );
}

export default Projects;
