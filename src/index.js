import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Contact from './components/contact';
import Education from './components/education';
import ComputerSkills from './components/computerskills';
import Courses from "./components";
import {Projects} from "./components";


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

ReactDOM.render(
  <React.StrictMode>
    <Contact />
  </React.StrictMode>,
  document.getElementById('contact')
);

ReactDOM.render(
  <React.StrictMode>
    <Education />
  </React.StrictMode>,
  document.getElementById('education')
);

ReactDOM.render(
  <React.StrictMode>
    <ComputerSkills />
  </React.StrictMode>,
  document.getElementById('computerskills')
);

ReactDOM.render(
  <React.StrictMode>
    <Courses />
  </React.StrictMode>,
  document.getElementById('courses')
);

ReactDOM.render(
  <React.StrictMode>
    <Projects />
  </React.StrictMode>,
  document.getElementById('projects')
);