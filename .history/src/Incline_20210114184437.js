import './Incline.css';
import DocumentTitle from 'react-document-title'
import image from './DSC_0690.JPG';

function Incline() {
  return (
    <DocumentTitle title = "Jack Feliciano | gallery:: Incline Village">
    <>
        <h1 style = {{fontFamily: "LAKE TAHOE"}}>Lake Tahoe</h1>
        <img className = "videogrid" src= {image}></img>
        <p className = "write-up">Lake Tahoe is a 122,000 acre freshwater beast, spanning 36 cubic miles on the California-Nevada border. Second to only the Great Lakes in terms of volume, and Crater Lake in terms of depth, Tahoe is simply a thing of beauty.
</p>
    </>
    </DocumentTitle>
  );
}

export default Incline;
