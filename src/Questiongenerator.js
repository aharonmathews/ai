// In a file like QuestionGenerator.js
import OpenAI from 'openai';

const API_KEY = process.env.REACT_APP_OPENAI_API_KEY;
const openai = new OpenAI({
  key: API_KEY,
  model: 'davinci', // You can experiment with different models
});


const generateQuestions = async (topic) => {
  try {
    const response = await openai.complete({
      prompt: `Generate questions about ${topic}.`,
      max_tokens: 100, // Adjust as needed
    });

    return response.choices[0].text.trim();
  } catch (error) {
    console.error('Error generating questions:', error);
    return 'Error generating questions. Please try again later.';
  }
};

export default generateQuestions;
