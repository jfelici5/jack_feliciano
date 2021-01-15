import './Incline.css';
import DocumentTitle from 'react-document-title'
import image from './DSC_0690.JPG';
import car from './car.JPG'
import dock from './dock.JPG'
import lighthouse from './lighthouse.jpg'
import tree from './tree.JPG'
import forest from './forest.JPG'
import forrest from './ft.jpeg'
import heaven from './heaven.jpeg'
import heavens from './heavens.jpeg'


function Incline() {
  return (
    <DocumentTitle title = "Jack Feliciano | gallery:: Incline Village">
    <>
    <h1 className = "heading"style = {{fontFamily: "HelveticaNeueforTargetUni-Bd", fontSize: 35 + 'px'}}>Lake Tahoe</h1>
    <img className = "videogrid" src= {image}></img>
    <p className = "write-up">
    <br></br>
    Lake Tahoe is a 122,000 acre freshwater beast, spanning 36 cubic miles on the California-Nevada border.
    While the lake is second to the Great Lakes in terms of volume, and Crater Lake in terms of depth, it is
    arguably second to none in terms of sheer beauty. This past week was my first time visiting Tahoe in almost 
    seven years, and I was simply blown away. This picture above is taken at Incline Beach, on the northern side of the lake.
    <br></br>
    <br></br>
    </p>
    <img className = "videogrid" src= {forest}></img>
    <p>The waning hours of daylight...</p>
    <div className = "holder">
        <div className = "gallery-content">
            <img src = {forrest}></img>
        </div>
        <div className = 'gapr'></div>
        <div className = "gallery-content">
            <img src = {heavens}></img>
        </div>
    </div>
    <img className = "videogrid" src= {dock}></img>
    <div className = "holder">

    </div>    
    <h1 style = {{fontFamily: "HelveticaNeueforTargetUni-Bd"}}>50 shades of...</h1>

    </>
    </DocumentTitle>
  );
}

export default Incline;
