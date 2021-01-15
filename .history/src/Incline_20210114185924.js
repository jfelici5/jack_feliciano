import './Incline.css';
import DocumentTitle from 'react-document-title'
import image from './DSC_0690.JPG';

function Incline() {
  return (
    <DocumentTitle title = "Jack Feliciano | gallery:: Incline Village">
    <>
        <h1 style = {{fontFamily: "HelveticaNeueLTPro-Bd", fontSize: 35 + 'px'}}>LAKE TAHOE</h1>
        <img className = "videogrid" src= {image}></img>
        <p className = "write-up">Lake Tahoe is a 122,000 acre freshwater beast, spanning 36 cubic miles on the California-Nevada border. While the lake is second to the Great Lakes in terms of volume, and Crater Lake in terms of depth, it is arguably second to none in terms of sheer beauty. This past week was my first time visiting Tahoe in almost seven years, and I was simply blown away.
</p>
    </>
    </DocumentTitle>
  );
}

export default Incline;
