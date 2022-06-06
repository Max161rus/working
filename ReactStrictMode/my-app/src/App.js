import { Component, StrictMode } from 'react';

import './App.css';

const Header = () => {
  return <h1>Hello world!</h1>
}

function App() {
  return (
    <div className="App">
      <StrictMode>
        <Header/>
      </StrictMode>
      
    </div>
  );
}

export default App;
