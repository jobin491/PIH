import React,{useState,useEffect} from 'react'
import axios from 'axios';
function Questions() {

    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);

  useEffect(() => {
    fetchQuizQuestions();
  }, []);

  const fetchQuizQuestions = async () => {
    try {
      const response = await axios.get(
        'https://opentdb.com/api.php?amount=10&type=multiple' 
      );
      setQuestions(response.data.results);
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  };

  const handleAnswerClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const currentQuestion = questions[currentQuestionIndex];

  if (!currentQuestion) {
    return (
      <div className="bg-blue-900 text-white text-center p-4">
        <h2 className="text-2xl font-semibold">Quiz Completed!</h2>
        <p className="text-lg font-medium">Your Score: {score}</p>
      </div>
    );
  }

  return (
    <div className="bg-blue-800 text-white max-w-md mx-auto p-4">
      <h2 className="text-2xl font-semibold">Question {currentQuestionIndex + 1}:</h2>
      <p className="text-lg">{currentQuestion.question}</p>
      {currentQuestion.incorrect_answers.map((answer, index) => (
        <button
          key={index}
          onClick={() => handleAnswerClick(false)}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold p-2 rounded-md m-2"
        >
          {answer}
        </button>
      ))}
      <button
        onClick={() => handleAnswerClick(true)}
        className="bg-green-600 hover:bg-green-700 text-white font-semibold p-2 rounded-md m-2"
      >
        {currentQuestion.correct_answer}
      </button>
    </div>
  );
};

export default Questions