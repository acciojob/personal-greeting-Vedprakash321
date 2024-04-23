
import React, { useState } from 'react';
import './../styles/App.css';

const App = () => {
  const [n, setName] = useState('');

  // Event handler for input change
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
        <label htmlFor="nameInput">Enter your name: </label>
      <input 
        id="nameInput"
        type="text"
        value={n}
        onChange={handleNameChange}
      />
         <p>{n ? `Hello ${n}! ` : ''}</p>
     
    </div>
  )
}

export default App




