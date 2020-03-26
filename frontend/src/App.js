import React from 'react';
import './App.css';
import Homepage from './Components/pages/Homepage';
import Navbar from './Components/layouts/Navbar';

function App() {
  return (
    <div className="App">
      <nav>
        <Navbar/>
      </nav>
      <div class="ui horizontal divider">
        Home
      </div>
      <div>
      <Homepage />
      </div>
    </div>
  );
}

export default App;
