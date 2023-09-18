import './App.css';
import DocumentTitle from 'react-document-title'
import Nav from './Nav'

function Resume() {
  return (
    <DocumentTitle title = "Jack Feliciano | resume">
      
    <div>
            <div className = "kobe">
    <div className = "info">
    <ul className = "card">
<li className = "item" id = "education" style = {{fontSize: 20 + 'px', fontFamily: "Andale Mono"}}><strong>EDUCATION</strong></li>
    
    </ul>
    </div>
    <div className = "socials-2">
      
    <ul className = "card">    
      {/* <li className = "item-1" >Download as PDF</li> */}
    </ul>
    </div>

  </div>
        <hr className = "social-line-1"></hr>

    <div className = "kobe">
    <div className = "info">
    <ul className = "card">
<li className = "item" style = {{fontSize: 17 + 'px'}}><strong>University of Rochester</strong></li>
    <li className = "item">BA Computer Science</li>
    <li className = "item">3.4/4.0 GPA</li>
    <br></br>
    <li className = "item"><strong>Awards: </strong>Dean's List, Dean's Scholarship for Academic Achievement, UAA All Academic Recognition</li>
    <li className = "item"><strong>Coursework: </strong>Discrete Math, Data Structures and Algorithms, Data Mining, Machine Learning, Artificial Intelligence</li>
    </ul>
    </div>
    <div className = "socials-2">
      
    <ul className = "card">    
      <li className = "item" >August 2019 - May 2023</li>
      <li className = "item" >Rochester, NY</li>
    </ul>
    </div>

  </div>
  <br  id = "skills" ></br>
  <h2 className = "header"style = {{fontSize: 20 + 'px', fontFamily: "Andale Mono"}}><strong>SKILLS</strong></h2>
  <hr className = "social-line"></hr>

  <div className = "kobe">
  <div className = "info">
    <ul className = "card">
    {/* <li className = "item"><strong>Languages: </strong>Java, Python, JavaScript, HTML, CSS, R</li> */}
    {/* <li className = "item"><strong>Frameworks: </strong>React, Express, Node.js, Git</li> */}
    </ul>
    </div>
  </div>
  <br  id = "experience" ></br>
  <h2 className = "header" style = {{fontSize: 20 + 'px', fontFamily: "Andale Mono"}}><strong>EXPERIENCE</strong></h2>
  <hr className = "social-line"></hr>
  <div className = "kobe">
  <div className = "info">
    <ul className = "card">
<li className = "item" style = {{fontSize: 17 + 'px'}}><strong>University of Rochester</strong></li>
<li className = "item"><em>DSCC 240: Data Mining</em></li>

    <li className = "item">Teaching Assistant</li>

    <li className = "item" >Rochester, NY</li>
    <br></br>
    <li className = "item">⚬ Held weekly office hours, graded assignments, and answered 60+ students' questions for DSC240: Data Mining</li>
    
    {/* <li className = "item">⚬ Something ab processing speeds?</li> */}
    </ul>
    </div>
    <div className = "socials-2">
    <ul className = "card">    
      <li className = "item" >June 2022 - August 2022</li>
    </ul>
    </div>

  </div>
  
  <div className = "kobe">
  <div className = "info">
    <ul className = "card">
<li className = "item" style = {{fontSize: 17 + 'px'}}><strong>Credit Suisse</strong></li>
<li className = "item"><em>AI/ML Team for Margin Services</em></li>

    <li className = "item">Software Engineering Intern</li>

    <li className = "item" >New York, NY</li>
    <br></br>
    <li className = "item">⚬ Trained XGBoost model using Python to identify relevant lines in margin call emails with 90% accuracy</li>
    <li className = "item">⚬ Built NLP model for stakeholders with text summarization, named entity recognition, and semantic classification functionality</li>
    <li className = "item">⚬ Developed and deployed full stack application and REST API for users to interface with model</li>
    {/* <li className = "item">⚬ Something ab processing speeds?</li> */}
    </ul>
    </div>
    <div className = "socials-2">
    <ul className = "card">    
      <li className = "item" >June 2022 - August 2022</li>
    </ul>
    </div>

  </div>
  <div className = "kobe">
  <div className = "info">
    <ul className = "card">
<li className = "item" style = {{fontSize: 17 + 'px'}}><strong>University of Rochester</strong></li>
  <li className = "item"><em>Dongmei Li Lab (Center for Research on Flavored Tobacco)</em></li>

    <li className = "item">Data Science Research Assistant</li>
    <li className = "item" >New York, NY</li>
    <br></br>
    <li className = "item">⚬ First-authored and published "Public Perceptions of Flavored Waterpipe Smoking on Twitter", in the International Journal of Environmental Research and Public Health</li>
    <li className = "item">⚬ Used Python to research flavored tobacco products through application of sentiment analysis, time series analysis, named entity recognition, and data visualization on Twitter datasets with over 1.3 million tweets </li>
    </ul>
    </div>
    <div className = "socials-2">
    <ul className = "card">    
      <li className = "item" >September 2021 - May 2023</li>
    </ul>
    </div>

  </div>
  <div className = "kobe">
  <div className = "info">
    <ul className = "card">
<li className = "item" style = {{fontSize: 17 + 'px'}}><strong>Credit Suisse</strong></li>
    <li className = "item">Product Management Intern</li>
    <li className = "item" >New York, NY</li>
    <br></br>
    <li className = "item">⚬ Trade Processing Architecture</li>
    </ul>
    </div>
    <div className = "socials-2">
    <ul className = "card">    
      <li className = "item" >June 2021 - August 2021</li>
    </ul>
    </div>

  </div>

    </div>
    </DocumentTitle>
  );
}

export default Resume;
