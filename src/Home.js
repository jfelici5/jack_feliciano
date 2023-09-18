import './App.css';
import DocumentTitle from 'react-document-title'
import {Link} from 'react-router-dom';

function Home() {
  return (
    <DocumentTitle title = "Jack Feliciano | home">
      <div>
    <div className = "videogrid-2">
        <div className = "japan-video">
          
        </div>  
      </div>
    <div className = "kobe">
      <div className = "socials">
     
      <ul className = "card">
        <li className = "item" style = {{fontSize: 17 + 'px', fontFamily: "Andale Mono"}}><strong>JACK FELICIANO</strong></li>
        <li className = "item" >Credit Suisse</li>
        <li className = "item" >Software Engineer, AI/ML Team</li>
        <li className = "item" >New York City, NY</li>
      </ul>
      <hr className = "social-line"></hr>
      <ul className = "card">
        <li className = "item" style = {{fontSize: 17 + 'px', fontFamily: "Andale Mono"}}><strong>CONNECT WITH ME</strong></li>
        <li className = "item"><a className = "item"href="mailto:jfelici5@u.rochester.edu" target="_blank">email</a></li>
        <li className = "item"><a className = "item"href="https://github.com/jfelici5" target="_blank">github</a></li>
        <li className = "item"><a className = "item"href="https://www.linkedin.com/in/jack-feliciano/" target="_blank">linkedin</a></li>
        <li className = "item"><a className = "item" href = "https://vsco.co/jack-feliciano/gallery" target = "_blank">vsco</a></li>
      </ul>
      </div>
      <p className = "about-me">
      Hi! My name is Jack and I am a recent grad of the University of Rochester. I am currently living in New York City and working as a software engineer for Credit Suisse on internal ML tools.
<br></br><br></br>

      I am a super curious person and have a passion for learning. I also enjoy being active. And playing music.

      Honestly this blog will be a mix of all my random interests, so I look forward to sharing some stories and cool
      pictures here. Go Warriors.

      <hr className = "social-line"></hr>


      <li className = "item" style = {{fontSize: 17 + 'px', fontFamily: "Andale Mono", listStyle: "none"}}><strong>RECENT POSTS</strong></li>
      <Link to = "/photos/usopen" style = {{textDecoration: 'none'}}><p  className = "city"style = {{color: "blue"}}>Watching Sascha Zverev at the US Open - August 31, 2023</p></Link>

      
      </p>
    </div>
    </div>
    </DocumentTitle>
  );
}

export default Home;
