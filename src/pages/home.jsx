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

export default function Home(){
    return (
        <div className="page-center">
          <div className="home-content">
            <TypingHello />
            <h3 className="about-me">
              my name is Emanuel Molla, a student at Columbia University majoring in
              biomedical engineering. I'm interested in exploring how computational
              methods can be used to reduce inequities in medicine and healthcare.
            </h3>
          </div>
        </div>
    );
}