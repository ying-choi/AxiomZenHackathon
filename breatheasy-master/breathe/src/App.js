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
              <p>Click the start button.</p>
          </div>

      <div className="toggle-button-class"><ToggleButton /></div>

      </div>
    );
  }
}

export default App;

var ToggleButton = React.createClass({
  getInitialState: function(){
    return {
      text: 'start'
    };
  },
  handleClick: function(){
    if (this.state.text === 'start'){
      this.setState({text: 'stop'});
    } else {
      this.setState({text: 'start'});
    }
  },
  render: function() {
    var partial;
    if (this.state.text === 'stop') {
      partial = <div className='breathe-button'></div>
    }
    return (
        <div>
          <div className={this.state.text} onClick={this.handleClick}>{this.state.text}</div>
          <p>
          {partial}
          </p>
        </div>
      );
    }
});
