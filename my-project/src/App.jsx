import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar'
import Footer from './Components/Footer'
import About from './Pages/About'
import Hire from './Pages/Hire'
import SkillsSection from './components/SkillSection'
import TechnicalSkills from './components/TechnicalSkills'
import Middle from './components/Middle'
import WorkPage from './Pages/Work';
import EducationCareer from './Components/EducationCareer';



const App = () => {
  return (
    <Router>
      {/* Navbar will always Displayed */}
      <Navbar/>
      
      
      
     

      {/* Routes for changing dynamic content */}
      <Routes>
        
        <Route exact path="/hire"element={<Hire />} />
        <Route exact path="/about"element={<About/>} />
        <Route exact path="/projects"element={<WorkPage/>} />
        
        <Route exact path="/"element={<><Middle/><About/><TechnicalSkills/><SkillsSection/><EducationCareer/></>} />

        
        
      </Routes>
      <Footer />
      {/* Footer is always displayed */}
    
    </Router>
  );
};

export default App;