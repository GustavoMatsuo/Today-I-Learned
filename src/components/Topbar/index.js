import React from 'react';
import './styles.css';
import GitHub from '../../assets/github.svg';
import Linkedin from '../../assets/linkedin.svg';

function Topbar() {
  return (
    <header className="header">
      <h4 className="title">Today I Learned</h4>
      <div className="img-container">
        <a href="https://www.linkedin.com/in/gustavo-matsuo-fuji-79a977172/" className="img-area" id="linkedin">
          <img src={Linkedin} alt="github" className="img"/>
          <p className="img-lbl">Linkedin</p>
        </a>
        <a href="https://github.com/GustavoMatsuo" className="img-area" id="github">
          <img src={GitHub} alt="github" className="img"/>
          <p className="img-lbl">GitHub</p>
        </a>
      </div>
    </header>
  );
}

export default Topbar;
