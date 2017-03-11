import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

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

      <button className="toggle-button"><ToggleButton /></button>

      <div className="Breathe-button-static"> </div>

      </div>



      </div>
    );
  }
}

export default App;

// class Toggle extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {isToggleOn: true};
//     this.handleClick = this.handleClick.bind(this);
//   }
//
//   handleClick() {
//     this.setState(prevState => ({
//       isToggleOn: !prevState.isToggleOn
//     }));
//   }
//
//   render() {
//     return (
//       <button onClick={this.handleClick}>
//       {this.state.isToggleOn ? '.Start' : '.Stop'}
//       </button>
//     );
//   }
// }

var ToggleButton = React.createClass({
  getInitialState: function(){
    return {
      text: 'Stop'
    };
  },
  handleClick: function(){
    if (this.state.text === 'Stop'){
      this.setState({text: 'Start'});
    } else {
      this.setState({text: 'Stop'});
    }
  },
  render: function() {
    return <div>
    <button className={this.state.text} onClick={this.handleClick}>{this.state.text}</button>
    {this.state.text === 'Start' && < Breathe />}
    </div>
  }

})

class Breathe extends React.Component {
  constructor() {
    super()
  }
  render(){
    return(
      <div className='Breathe-button-animate'></div>
    )
  }
}
