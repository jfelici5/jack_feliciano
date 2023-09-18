import './Incline.css';
import DocumentTitle from 'react-document-title'
import image from './sascha.jpeg';
import car from './car.JPG'
import dock from './dock.JPG'
import lighthouse from './lighthouse.jpg'
import tree from './tree.JPG'
import ashe from './ashe.jpeg'
import forrest from './ft.jpeg'
import drop from './drop.jpeg'
import heavens from './heavens.jpeg'


function Incline() {
  return (
    <DocumentTitle title = "Jack Feliciano | gallery:: Incline Village">
    <>
    <h1 className = "heading"style = {{fontFamily: "Helvetica Neue", fontSize: 35 + 'px'}}>US Open</h1>
    <h1 className = "heading"style = {{fontFamily: "Helvetica Neue", fontSize: 24 + 'px'}}>August 31, 2023</h1>

    <img className = "videogrid" src= {image}></img>
    <p className = "write-up">
    <br></br>
    Court 17 for the Zverev - Altmaier match
    <br></br>
    <br></br>
    </p>
    <img className = "videogrid" src= {ashe}></img>
    <br></br>
    <p className = "write-up">Arthur Ashe stadium around 11PM</p>
    <br></br>
    <img className = "videogrid" src= {drop}></img>
    <br></br>
    <p className='write-up'>    Gearing up for a drop shot
</p>
    <div className = "holder">

    </div>    
    </>
    </DocumentTitle>
  );
}

export default Incline;
