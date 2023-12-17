import React, {useEffect, useState} from 'react'
import '../styles/App.css';

const App = () => {
 const [isBlue, setIsBlue] = useState(false);

  const handleButtonClick = () => {
    setIsBlue((prevIsBlue) => !prevIsBlue);
  return (
    <div id="main">
      <p className={} >Newton School</p>
      <button id='button' onClick={}>Change Style</button>
    </div>
  )
}


export default App;
