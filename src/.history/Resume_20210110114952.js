import './App.css';

function Resume() {
  return (
    <div>
        <h2 className = "header" style = {{fontSize: 20 + 'px'}}><strong>EDUCATION</strong></h2>
    <div className = "kobe">
    <div className = "info">
    <ul className = "card">
<li className = "item" style = {{fontSize: 17 + 'px'}}><strong>University of Rochester</strong></li>
    <li className = "item">BS Computer Science</li>
    <li className = "item">3.63/4.00 GPA</li>
    <br></br>
    <li className = "item"><strong>Awards: </strong>Dean's List, Dean's Scholarship for Academic Achievement</li>
    <li className = "item"><strong>Coursework: </strong>Discrete Math, Data Structures and Algorithms, Data Mining, Formal Systems, Computational Statistics</li>
    </ul>
    </div>
    <div className = "socials-2">
      
    <ul className = "card">    
      <li className = "item" >August 2019 - May 2023</li>
      <li className = "item" >Rochester, NY</li>
    </ul>
    </div>

  </div>
  <h2 className = "header" style = {{fontSize: 20 + 'px'}}><strong>SKILLS</strong></h2>
  <div className = "kobe">
  <div className = "info">
    <ul className = "card">
    <li className = "item"><strong>Languages: </strong>Java, Python, JavaScript, HTML, CSS, R</li>
    <li className = "item"><strong>Frameworks: </strong>React, Express, Node.js, Git</li>
    </ul>
    </div>
  </div>
  <h2 className = "header" style = {{fontSize: 20 + 'px'}}><strong>EXPERIENCE</strong></h2>
  <div className = "kobe">
  <div className = "info">
    <ul className = "card">
<li className = "item" style = {{fontSize: 17 + 'px'}}><strong>Credit Suisse</strong></li>
    <li className = "item">Summer Technology Analyst</li>
    <li className = "item" >New York, NY</li>
    <br></br>
    <li className = "item">⚬ Placed on business analytics team; will be working on trade and settlement flow</li>
    <li className = "item">⚬ COBOL, JB2, Mainframe</li>
    </ul>
    </div>
    <div className = "socials-2">
    <ul className = "card">    
      <li className = "item" >June 2021 - August 2021</li>
    </ul>
    </div>

  </div>
  <div className = "kobe">
  <div className = "info">
    <ul className = "card">
<li className = "item" style = {{fontSize: 17 + 'px'}}><strong>University of Rochester Medical Center</strong></li>
    <li className = "item">Research Assistant</li>
    <li className = "item" >Rochester, NY</li>

    <br></br>
    <li className = "item">⚬ Researching early childhood development as part of ECHO UPSIDE project</li>
    <li className = "item">⚬ Utilizing R packages to cleanse datasets for monthly uploads</li>
    <li className = "item">⚬ Observational coding of sex-typical play and executive function tasks</li>
    <li className = "item">⚬ Data entry and assisting project coordinators with project organization</li>
    </ul>
    </div>
    <div className = "socials-2">
    <ul className = "card">    
      <li className = "item" >August 2020 - Present</li>
    </ul>
    </div>
  </div>
    </div>
  );
}

export default Resume;
