// App.js
import React, { useState } from 'react';
import '../styles/App.css';

const App = () => {
  const [isBlue, setIsBlue] = useState(false);

  const handleButtonClick = () => {
    setIsBlue((prevIsBlue) => !prevIsBlue);
  };

  return (
    <div id="main">
      <p className={isBlue ? 'blueColor' : 'redColor'}>Newton School</p>
      <button id='button' onClick={handleButtonClick}>Change Style</button>
    </div>
  );
};

export default App;

