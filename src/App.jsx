import React from 'react';
import './App.css';
import {Route,Routes} from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Resume from './components/resume';
import Project from './components/project';
import Contact from './components/contact';
function App() {
  return (
    <div>
    <Routes> 
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/resume' element={<Resume/>}/>
      <Route path='/project' element={<Project/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </div>
  );
}

export default App;
