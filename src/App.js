import React from 'react';
import './css/App.css';
import GetCoinsList from './js/GetCoinsList.js';

function App() {
  return (
    <div className="App">
      <div className="headingStyles">
        {/* Title */}
          <h1>Crypto Wiki</h1>
          <GetCoinsList/>
        </div>
    </div>
  );
}

export default App;
