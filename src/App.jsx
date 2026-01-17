import './App.css'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import websiteLogo from './assets/website_logo.jpg';
import { useEffect, useState } from 'react';
import { HashRouter } from 'react-router-dom';
import Home from './pages/home.jsx';
import Projects from './pages/projects.jsx';
import Writing from './pages/writing.jsx';
import Research from './pages/research.jsx';
import Resume from './pages/resume.jsx';
import About from './pages/about.jsx';
import Contact from './pages/contact.jsx';


function TypingHello() {
  const words = ['hello', 'hola', 'bonjour', 'ciao', 'ሀሎ', ];

  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const currentWord = words[wordIndex];
  const text = currentWord.slice(0, charIndex);

  useEffect(() => {
    let timeout;

    if (!isDeleting && charIndex < currentWord.length) {
      timeout = setTimeout(() => setCharIndex(charIndex + 1), 150);
    } else if (!isDeleting && charIndex === currentWord.length) {
      timeout = setTimeout(() => setIsDeleting(true), 700);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex(charIndex - 1), 100);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setWordIndex((wordIndex + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex, currentWord]);

  return <h1 className="page-title">{text}</h1>;
}

function Page({ title, children }) {
  return (
    <div className="page">
      <h1 className="page-title">{title}</h1>
      <div className="content">
        {children}
      </div>
    </div>
  );
}

function ProjectCard({ title, description, tech, link }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <p className="tech-stack">{tech}</p>
      {link && <a href={link} target="_blank" rel="noopener noreferrer">View Project →</a>}
    </div>
  );
}

function WritingCard({ title, date, excerpt, link }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p className="date">{date}</p>
      <p>{excerpt}</p>
      {link && <a href={link}>Read More →</a>}
    </div>
  );
}

function ResearchCard({ title, institution, period, description }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p className="institution">{institution} • {period}</p>
      <p>{description}</p>
    </div>
  );
}

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <>
    
      <HashRouter>
      <header className="site-header">
        <button onClick={() => setCurrentPage('home')} className="home-button">
          <a href="#/">
          <img className="logo" src={websiteLogo} alt="Emanuel Molla" />
          </a>
        </button>

        <nav className="nav-buttons">
          <button onClick={() => setCurrentPage('projects')}><a href="#/projects">projects</a></button>
          <button onClick={() => setCurrentPage('writing')}><a href="#/writing">writing</a></button>
          <button onClick={() => setCurrentPage('research')}><a href="#/research">research</a></button>
          <button onClick={() => setCurrentPage('resume')}><a href="#/resume">resume + info</a></button>
          <button onClick={() => setCurrentPage('about')}><a href="#/about">about me</a></button>
          <button onClick={() => setCurrentPage('contact')}><a href="#/contact">contact</a></button>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/writing" element={<Writing/>}/>
        <Route path="/research" element={<Research/>}/>
        <Route path="/resume" element={<Resume/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      
      </HashRouter>
    </>
  );
}

export default App;