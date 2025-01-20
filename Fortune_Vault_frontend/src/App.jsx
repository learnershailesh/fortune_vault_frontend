import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      {/* You can add more sections here like BuyToken and WhitePaper */}
    </div>
  );
}

export default App;
