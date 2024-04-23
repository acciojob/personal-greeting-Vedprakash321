
import React, { useState } from 'react';
import './../styles/App.css';

const App = () => {
  const [name, setName] = useState('');

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
        value={name}
        onChange={handleNameChange}
      />
      {name && <p>Hello, {name}! Welcome to our website.</p>}
    </div>
  )
}

export default App




