import './App.css'
import websiteLogo from './assets/website_logo.jpg'
import introPic from './assets/intro_image.jpeg'
import { useEffect, useState } from 'react';



function TypingHello() {
  const words = ['hello', 'hola', 'bonjour', 'ciao', 'ሀሎ'];

  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const currentWord = words[wordIndex];
  const text = currentWord.slice(0, charIndex);

  useEffect(() => {
    let timeout;

    if (!isDeleting && charIndex < currentWord.length) {
      // typing
      timeout = setTimeout(() => {
        setCharIndex(charIndex + 1);
      }, 150);
    } 
    else if (!isDeleting && charIndex === currentWord.length) {
      // pause at full word
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 700);
    } 
    else if (isDeleting && charIndex > 0) {
      // deleting
      timeout = setTimeout(() => {
        setCharIndex(charIndex - 1);
      }, 100);
    } 
    else if (isDeleting && charIndex === 0) {
      // move to next word
      setIsDeleting(false);
      setWordIndex((wordIndex + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex, currentWord]);

  return (
    <h1
      id="welcome-message"
      style={{ color: 'white', fontFamily: 'Courier New, monospace' }}
    >
      {text}

    </h1>
  );
}






function App() {
  const [currentPage, setCurrentPage] = useState('home');
  return (
    <>
    <div>
      <header className="site-header">
        <button onClick={() => setCurrentPage('home')} className="home-button">
          <img className="logo" src={websiteLogo} alt="Emanuel Molla" />
        </button>

        <nav className="nav-buttons">
          <button onClick={() => setCurrentPage('projects')}>projects</button>
          <button onClick={() => setCurrentPage('writing')}>writing</button>
          <button onClick={() => setCurrentPage('research')}>research</button>
          <button onClick={() => setCurrentPage('resume')}>resume + info</button>
          <button onClick={() => setCurrentPage('about')}>about me</button>
          <button onClick={() => setCurrentPage('contact')}>contact</button>
        </nav>
      </header>
    </div>
    <div>
      {currentPage === 'home' && (
        <>
          <TypingHello />
          <h3 id="about-me">my name is Emanuel Molla, a student at Columbia University majoring in biomedical engineering. I'm interested in exploring how computational methods can be used to reduce inequities in medicine and healthcare.</h3>
        </>
      )}
      {currentPage === 'projects' && <ProjectsPage />}
      {currentPage === 'writing' && <WritingPage />}
      {currentPage === 'research' && <ResearchPage />}
      {currentPage === 'resume' && <ResumePage />}
      {currentPage === 'contact' && <ContactPage />}
      {currentPage === 'about' && <AboutPage />}
    </div>
    </>
  )
}

function ProjectsPage(){
  return (
    <div>
    <h1>Projects</h1>
    <img
    </div>
  );
}

function WritingPage(){
  return (
    <div>
    <h1>Writing</h1>
    </div>
  );
}

function ResearchPage(){
  return (
    <div>
    <h1>Research</h1>
    </div>
  );
}

function ResumePage(){
  return (
    <div>
    <h1>Resume</h1>
    </div>
  );
}

function ContactPage(){
  return (
    <div>
    <h1>Contact</h1>
    </div>
  );
}

function AboutPage(){
  return (
    <div>
    <h1>About Me</h1>
    </div>
  );
}



export default App
