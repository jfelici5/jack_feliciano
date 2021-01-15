import './Incline.css';
import DocumentTitle from 'react-document-title'
import image from './DSC_0690.JPG';

function Incline() {
  return (
    <DocumentTitle title = "Jack Feliciano | gallery:: Incline Village">
    <>
    <div>
        <div className = "videogrid"><img src = {image} className = "japan-video"></img></div>
        <p className = "write-up">Lake Tahoe is a 122,000 acre freshwater beast, spanning 36 cubic miles on the California-Nevada border. Second to only the Great Lakes in terms of volume, and Crater Lake in terms of depth, Tahoe is simply a thing of beauty.
</p>
    </div>
    </>
    </DocumentTitle>
  );
}

export default Incline;
