import React from 'react';
import './App.css';





function App() {
  return (
    <div className="App">
      <div className="Calculator">
        <div className="row">
          <input type="text" /> * X2 + 
          <input type="text" /> * X + 
          <input type="text" /> = {0}
        </div>
        <div className="second-row">
          <button>Посчитать</button>
        </div>
      </div>
    </div>
  );
}

export default App;
