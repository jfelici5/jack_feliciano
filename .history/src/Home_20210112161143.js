import './App.css';

function Home() {
  return (
    <div>
    <div className = "videogrid-2">
        <div className = "japan-video">
          
        </div>  
      </div>
    <div className = "kobe">
      <div className = "socials">
      <ul className = "card">
        <li className = "item" style = {{fontSize: 17 + 'px', fontFamily: "Andale Mono"}}><strong>JACK FELICIANO</strong></li>
        <li className = "item" >Credit Suisse Securities</li>
        <li className = "item" >Incoming Summer Technology Analyst</li>
        <li className = "item" >New York City, NY</li>
      </ul>
      <hr className = "social-line"></hr>
      <ul className = "card">
        <li className = "item" style = {{fontSize: 17 + 'px'}}><strong>CONNECT WITH ME</strong></li>
        <li className = "item"><a className = "item"href="mailto:jfelici5@u.rochester.edu" target="_blank">email</a></li>
        <li className = "item"><a className = "item"href="https://github.com/jfelici5" target="_blank">github</a></li>
        <li className = "item"><a className = "item"href="https://www.linkedin.com/in/jack-feliciano/" target="_blank">linkedin</a></li>
        <li className = "item"><a className = "item" href = "https://vsco.co/jack-feliciano/gallery" target = "_blank">vsco</a></li>
      </ul>
      </div>
      <p className = "about-me">
      Hi there! My name is Jack and I am an aspiring software engineer. I am currently studying early childhood development as a research assistant at UR Medical Center, and will be working on trade and settlement flow at Credit Suisse as a Summer Technology Analyst this upcoming summer in New York City. Within tech, I am most interested in web development and data analysis. I previously redesigned the website for After Hours, an on campus student organization, using React and have helped write Flutter tutorials for uRochester’s Google Developer Students Club.
<br></br><br></br>
When I'm not studying, you can find me on campus either golfing or singing. I am on the Men's Varsity Golf team and have competed with the team in Florida, Georgia, and New York, as well as individually all over the west coast. I am also a member of After Hours A Cappella, a co-ed performance group on campus.
<br></br><br></br>
Outside of school and work, I spend most of my time outdoors, either working on my golf game, hiking, or practicing photography. I also enjoy playing guitar and am a diehard Golden State Warriors fan
      </p>
    </div>
    </div>
  );
}

export default Home;
