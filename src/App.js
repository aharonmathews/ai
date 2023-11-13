// App.js
import React, { useState } from 'react';
import QuestionGenerator from './Questiongenerator'; // Adjust the path based on your actual file structure
import TopicInput from './TopicInput'; // Adjust the path based on your actual file structure
import QuizQuestions from './QuizQuestions'; // Adjust the path based on your actual file structure
import Button from './button'; // Adjust the path based on your actual file structure
import './App.css'; 
const App = () => {
  const [topic, setTopic] = useState('');
  const [questions, setQuestions] = useState('');

  const handleTopicChange = (newTopic) => {
    setTopic(newTopic);
  };

  const handleGenerateQuestions = async () => {
    const generatedQuestions = await QuestionGenerator(topic);
    setQuestions(generatedQuestions);
  };

  return (
    <div className="App">
      <h1>Quiz App</h1>
      <TopicInput
        onTopicChange={handleTopicChange}
        onGenerateQuestions={handleGenerateQuestions}
      />
      <Button />
      <QuestionGenerator questions={questions} />
       <QuizQuestions questions={questions} /> 
    </div>
  );
};

export default App;
