import logo from './logo.svg';
import './App.css';

function Resume() {
  return (
    <div>
    <div className = "kobe">
    <div className = "socials">
    <ul className = "card">
    <li className = "item" style = {{fontSize: 17 + 'px'}}><strong>EDUCATION</strong></li>      
      <li className = "item" >August 2019 - May 2023</li>
      <li className = "item" >Rochester, NY</li>
    </ul>
    
    </div>
    <ul className = "card">
    <br></br><li className = "item" style = {{fontSize: 17 + 'px'}}><strong>University of Rochester</strong></li>
    </ul>
  </div>
      <div className = "kobe">
      <div className = "socials">
      <ul className = "card">
        <li className = "item" style = {{fontSize: 17 + 'px'}}><strong>JACK FELICIANO</strong></li>
        <li className = "item" >Credit Suisse Securities</li>
        <li className = "item" >Incoming Summer Technology Analyst</li>
        <li className = "item" >New York City, NY</li>
      </ul>
      <hr className = "social-line"></hr>
      <ul className = "card">
        <li className = "item" style = {{fontSize: 17 + 'px'}}><strong>CONNECT WITH ME</strong></li>
        <li className = "item">email</li>
        <li className = "item">github</li>
        <li className = "item">linkedin</li>
        <li className = "item">vsco</li>
      </ul>
      </div>
      <p className = "about-me">
      Hi there! My name is Jack and I am a second year computer science student at University of Rochester. I am currently studying early childhood development as a research assistant at UR Medical Center, and will be working on trade and settlement flow at Credit Suisse as a Summer Technology Analyst this upcoming summer in New York City. Within tech, I am most interested in web development and data analysis. I previously redesigned the website for After Hours, an on campus student organization, using React and have helped write Flutter tutorials for uRochester’s Google Developer Students Club.
<br></br><br></br>
Outside of school and work, I spend most of my time outdoors, either working on my golf game, hiking, or practicing photography. I also enjoy playing guitar and am a diehard Golden State Warriors fan
      </p>
    </div>
    </div>
  );
}

export default Resume;
