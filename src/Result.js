import React from 'react';

const Result = props => {
 
  return (
    <p className="text">
       Your Score: {props.numCorrect}/{props.numQuestions}
    </p>
  );
};

export default Result;