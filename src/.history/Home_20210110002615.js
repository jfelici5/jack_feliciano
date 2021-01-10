import logo from './logo.svg';
import './App.css';

function Home() {
  return (
    <div className = "kobe">
      <div className = "socials">
      <ul className = "card">
        <li fontSize = "30px">JACK FELICIANO</li>
        <li>Credit Suisse Securities</li>
        <li>Summer Technology Analyst</li>
        <li>New York City, NY</li>
      </ul>

      <hr className = "social-line"></hr>
      CONNECT WITH ME<br></br>
      github - jfelici5<br></br>
      linkedin - jack-feliciano<br></br>
instagram - jack_feliciano<br></br>
vsco - jack-feliciano
      </div>
      <p className = "about-me">
      Hi there! My name is Jack and I am a second year computer science student at University of Rochester. I am currently studying early childhood development as a research assistant at UR Medical Center, and will be working on trade and settlement flow at Credit Suisse as a Summer Technology Analyst this upcoming summer in New York City. Within tech, I am most interested in web development and data analysis. I previously redesigned the website for After Hours, an on campus student organization, using React and have helped write Flutter tutorials for uRochester’s Google Developer Students Club.
<br></br><br></br>
Outside of school and work, I spend most of my time outdoors, either working on my golf game, hiking, or practicing photography. I also enjoy playing guitar and am a diehard Golden State Warriors fan
      </p>
    </div>
  );
}

export default Home;
