import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MathUserInteraction from './MathUserInteraction';
import Result from './Result';

class App extends Component {
  state = {
    numQuestions:0, 
    numCorrect:0
  };  
  calculatScore = answerRight => {
    this.setState(prevState => ({
      numQuestions : prevState.numQuestions + 1,
      numCorrect: (answerRight ? prevState.numCorrect + 1 : prevState.numCorrect)
    }));
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
    	  <MathUserInteraction onResolve={this.calculatScore}/>
		  <Result numCorrect={this.state.numCorrect} numQuestions={this.state.numQuestions}/>
        </div>
      </div>
    );
  }
}

export default App;
