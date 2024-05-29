// src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';


const App = () => {
  const [inputText, setInputText] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    process.env.PUBLIC_URL + '/images/teriyaki_chicken.jpg',
    process.env.PUBLIC_URL + '/images/cheesecake.png',
    // Add more image paths here
    process.env.PUBLIC_URL + '/images/Logo.png',
    process.env.PUBLIC_URL + '/images/Katsu_Curry.jpg',
    process.env.PUBLIC_URL + '/images/Teriyaki_curry.jpg',
    process.env.PUBLIC_URL + '/images/focaccia_egg.png',
    process.env.PUBLIC_URL + '/images/milktea.png',
    process.env.PUBLIC_URL + '/images/cream_teriyaki.png',
    process.env.PUBLIC_URL + '/images/croffle.png',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Clean up on unmount
  }, [images.length]);

  const handleChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSpeak = () => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(inputText);
      window.speechSynthesis.speak(utterance);
    } else {
      alert('Sorry, your browser does not support speech synthesis.');
    }
  };

  const setPredefinedText = (text) => {
    setInputText(text);
  };
  const clearText = () => {
    setInputText('');
  };

  return (
    <div className="app-container">
      <h1>Artease SG Cafe</h1>
      <div className="image-container">
      <img 
          alt="cycling_image" 
          src={images[currentImageIndex]} 
          className="responsive-image" 
        />
      {/* <img alt={"teriyaki_chicken"} src={process.env.PUBLIC_URL + './images/teriyaki_chicken.jpg'} style={{ height: "256px" }} />
      <img alt={"cream_pasta"} src={process.env.PUBLIC_URL + './images/teriyaki_chicken.jpg'} style={{ height: "256px" }} /> */}
      </div>
      <textarea
        rows="4"
        cols="50"
        value={inputText}
        onChange={handleChange}
        placeholder="Enter numbers or text here..."
        className="text-area"
      ></textarea>
      <br />
      <button className="speak-button" onClick={handleSpeak}>Speak</button>
      <br /><br />
      <button className="predefined-button" onClick={() => setPredefinedText("Please return your tray")}>Please return your tray</button>
      <button className="predefined-button" onClick={() => setPredefinedText("No Outside Food")}>No Outside Food</button>
      <br/><br/>
      <button className="clear-button" onClick={clearText}>Clear</button>
    </div>
  );
};

export default App;
