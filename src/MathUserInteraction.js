import React, { Component } from 'react';

class MathUserInteraction extends Component {
 getMathValues (){
    let valuesArr = [];
    valuesArr.push(Math.floor(Math.random() * 100));
    valuesArr.push(Math.floor(Math.random() * 100));
    valuesArr.push(Math.floor(Math.random() * 100));
    valuesArr.push(Math.floor(Math.random() * 3) + valuesArr[0] + valuesArr[1] + valuesArr[2]);
   console.log(`******* realResult = ${valuesArr[0] + valuesArr[1] +valuesArr[2]}`);
    return valuesArr;
  }; 
  mathValues = this.getMathValues();
  
state = {
  value1 : this.mathValues[0],
  value2 : this.mathValues[1],
  value3 : this.mathValues[2],
  realResult :  this.mathValues[0] + this.mathValues[1] + this.mathValues[2],
  proposedAnswer : this.mathValues[3]
};

  validateAnswerTrue = event => {
    let userAnswerRight = this.state.realResult === this.state.proposedAnswer;  
   	this.updateState();
    this.props.onResolve(userAnswerRight);
  }

updateState = () => {
  const newMathValues = this.getMathValues();
  this.setState(prevState => ({
    value1 : newMathValues[0],
    value2 : newMathValues[1],
    value3 : newMathValues[2],
    realResult : newMathValues[0] + newMathValues[1] + newMathValues[2],
    proposedAnswer : newMathValues[3]
  }));
  debugger;
};

  validateAnswerFalse = event => {
    
    let userAnswerRight = this.state.realResult !== this.state.proposedAnswer; 
    this.updateState();
    this.props.onResolve(userAnswerRight);
  }

  render(){
    const {value1, value2, value3, proposedAnswer} = this.state;
    return (
      <div>
	    <div className="equation">
           <p className="text">{`${value1} + ${value2} + ${value3} = ${proposedAnswer}`}</p>
		</div>
		<button name="true" onClick={this.validateAnswerTrue}>True</button>
		<button name="false" onClick={this.validateAnswerFalse}>False</button>	
	</div>
	)
  }
}

export default MathUserInteraction;