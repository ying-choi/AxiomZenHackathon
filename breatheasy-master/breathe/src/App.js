import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
          <style>
            @import url('https://fonts.googleapis.com/css?family=Vollkorn');
          </style>

          <div className="app-header">
            <h2>~Breathe Easy~</h2>
          </div>

          <div className="text">
              <ol>
                  <li> Take a slow breath in through the nose, breathing into your lower belly (for about <i>four seconds</i>)</li>
                  <li> Hold your breath for one or <i>two seconds</i> </li>
                  <li> Exhale slowly through the mouth (for about <i>four seconds</i>) </li>
                  <li> Wait a few seconds before taking another breath </li>
              </ol>
          </div>


          <div className="breathe-button"></div>

      </div>
    );
  }
}

export default App;
