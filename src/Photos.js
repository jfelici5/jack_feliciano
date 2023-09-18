import logo from './logo.svg';
import './App.css';
import DocumentTitle from 'react-document-title'
import { Link } from 'react-router-dom';

function Photos() {
  return (
    <DocumentTitle title = "Jack Feliciano | blogs">
    <div style={{minHeight: '70vh'}}>
      <h3>2023</h3>
      <Link to = "/photos/usopen" style = {{textDecoration: 'none'}}><p  className = "city"style = {{color: "blue"}}>August 31, 2023 - Watching Sascha Zverev at the US Open</p></Link>

      <h3>2021</h3>
      <Link to = "/photos/incline" style = {{textDecoration: 'none'}}><p  className = "city"style = {{color: "blue"}}>January 5, 2021 - Spending New Years' in Lake Tahoe</p></Link>

    </div>
    </DocumentTitle>
  );
}

export default Photos;
