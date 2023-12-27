import React from 'react'
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AboutMe   from './pages/aboutme'
import Portfolio from './pages/portfolio'
import Error from './pages/error'
import Schooling from './pages/schooling'
import Skills from './pages/skills'
import Header from './components/Header'
import Footer from './components/Footer'
import ProjectForm from './pages/projectform'
import './styles/templateStyle.scss'
import Wrapper from './components/Wrapper'
import backgroundhome from './assets/banner_www.png'


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Wrapper pixURL={backgroundhome} />
      <Routes>
        <Route path="/project/:projectId" element={<ProjectForm />}/>
        <Route path="/" element={<AboutMe />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/schooling" element={<Schooling />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
)
