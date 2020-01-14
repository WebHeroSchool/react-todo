import React from 'react';
import logo from './logo.svg';
import './App.css';
const num1 = 3;
const num2 = 4;
const flag = true;
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p style={{
            color: 'yellow'
        }}>
            Hello World!
        </p>
        <p>
            { num1 }, { num1 + num2 }, {flag && 'Flag is true'}, {flag ? 'Flag is true' : 'Flag is false'}
        </p>
          <p>
              {undefined} {null} {true} {false}
          </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
