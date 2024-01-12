import './App.css'
import {Route, Routes} from 'react-router-dom'

import About from './components/aboutMe/about'
import Navbar from './components/navbar'
import Project from './components/courseProjects/project';
import Education from './components/work/education';
import Experience from './components/work/experience';
import Contact from './components/contactMe/contact';
import Skills from './components/skills/skills';


function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element= {<About />} />
      <Route path='/about' element= {<About />} />
      <Route path='/project' element= {<Project />} />
      <Route path='/education' element= {<Education />} />
      <Route path='/experience' element= {<Experience />} />
      <Route path='/skills' element= {<Skills />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
    </>
  )
}

export default App
