// TopicInput.js
import React, { useState } from 'react';
import Button from './button'; // Adjust the path based on your actual file structure

const TopicInput = ({ onTopicChange, onGenerateQuestions }) => {
  const [topic, setTopic] = useState('');

  const handleInputChange = (e) => {
    setTopic(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onTopicChange(topic);
    onGenerateQuestions(topic);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Topic:
        <input
          type="text"
          value={topic}
          onChange={handleInputChange}
        />
      </label>
      <Button type="submit" />
    </form>
  );
};

export default TopicInput;

