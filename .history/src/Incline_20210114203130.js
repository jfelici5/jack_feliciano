import './Incline.css';
import DocumentTitle from 'react-document-title'
import image from './DSC_0690.JPG';
import car from './car.JPG'
import dock from './dock.JPG'
import lighthouse from './lighthouse.jpg'

function Incline() {
  return (
    <DocumentTitle title = "Jack Feliciano | gallery:: Incline Village">
    <>
        <h1 className = "heading"style = {{fontFamily: "HelveticaNeueforTargetUni-Bd", fontSize: 35 + 'px'}}>Lake Tahoe</h1>
        <img className = "videogrid" src= {image}></img>
        <p className = "write-up"><br></br>Lake Tahoe is a 122,000 acre freshwater beast, spanning 36 cubic miles on the California-Nevada border. While the lake is second to the Great Lakes in terms of volume, and Crater Lake in terms of depth, it is arguably second to none in terms of sheer beauty. This past week was my first time visiting Tahoe in almost seven years, and I was simply blown away.
</p>
    <div className = "gallery-content"><img src = {car}></img><img src = {dock}></img></div>
    <h1 style = {{fontFamily: "HelveticaNeueforTargetUni-Bd"}}>50 shades of...</h1>
    <div className = "holder"><div className = "gallery-content"><img src = {car}></img></div><div className = "gallery-content-1"><img src = {lighthouse}></img><img src = {dock}></img></div></div>
    </>
    </DocumentTitle>
  );
}

export default Incline;
