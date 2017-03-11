import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <style>
            @import url('https://fonts.googleapis.com/css?family=Vollkorn');
          </style>

          <div className="App-header">
            <h2>Breathe Easy</h2>
          </div>

          <div className="Text">
              <ol>
                  <li> Take a slow breath in through the nose, breathing into your lower belly (for about 4 seconds)</li>
                  <li> Hold your breath for 1 or 2 seconds </li>
                  <li> Exhale slowly through the mouth (for about 4 seconds) </li>
                  <li> Wait a few seconds before taking another breath </li>
              </ol>
          </div>


          <div className="Breathe-button"></div>

      </div>
    );
  }
}

export default App;
