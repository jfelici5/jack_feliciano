import './App.css';
import './Projects.css';
import DocumentTitle from 'react-document-title'

function Projects() {
  return (
    <DocumentTitle title = "Jack Feliciano | projects">
    <div>
        <div className = "project-tile">
            <div className = "image-tile">
                <div className = "img"></div>
            </div>
            <div className = "gap-tile"></div>
            <div className = "info-tile">
                <div className = "text-right">
                <h1 style = {{fontSize: 17 + 'px', fontFamily: "Andale Mono"}}>urafterhours.com</h1>
                <h2>React, JavaScript, jquery, HTML/CSS, Heroku</h2>
                <p>A desktop website for the premier a cappella group at University of Rochester</p>
            </div>
            </div>
        </div>
        <hr></hr>
        <div className = "project-tile">
            
            <div className = "gap-tile"></div>
            <div className = "info-tile">
                <div className = "text-left">
                <h1 style = {{fontSize: 17 + 'px', fontFamily: "Andale Mono"}}>2048</h1>
                <h2>Java</h2>
                <p>A console clone of 2048 demonstrating knowledge of ArrayList data structure for CS 172</p>
                </div>
                </div>
                <a className = "image-tile" href = "/">
                <div className = "img"></div>
            </a>
        </div>
        
    </div>
    <DocumentTitle
  );
}

export default Projects;
