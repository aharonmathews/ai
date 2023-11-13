import React from 'react';

const QuizQuestions = ({ questions }) => {
  return (
    <div>
      <h2>Quiz Questions</h2>
      <ul>
        {questions.map((question, index) => (
          <li key={index}>{question}</li>
        ))}
      </ul>
    </div>
  );
};

export default QuizQuestions;
