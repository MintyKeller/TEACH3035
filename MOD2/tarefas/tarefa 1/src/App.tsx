import React, { useState } from 'react';
import './App.css'


function App() {
  const[count, setCount] = useState(1); 

  function incrementar(){
    setCount(count + 1);
  };


  return (
    <div className="App">
   

    <p>Contador {count}</p>
    <button onClick={incrementar}>Adcionar</button>

    </div>
  );
}

export default App;
