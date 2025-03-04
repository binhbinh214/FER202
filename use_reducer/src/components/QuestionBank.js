import React, { useReducer, useState, useEffect } from "react";
import { Button, Card, ProgressBar } from "react-bootstrap";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const initialState = {
  questions: [
    {
      id: 1,
      question: "What is the capital of Australia?",
      options: ["Sydney", "Canberra", "Melbourne", "Perth"],
      answer: "Canberra",
    },
    {
      id: 2,
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      answer: "Mars",
    },
    {
      id: 3,
      question: "What is the largest ocean on Earth?",
      options: [
        "Atlantic Ocean",
        "Indian Ocean",
        "Pacific Ocean",
        "Arctic Ocean",
      ],
      answer: "Pacific Ocean",
    },
  ],
  currentQuestion: 0,
  selectedOption: "",
  score: 0,
  showScore: false,
  feedback: null,
};

function quizReducer(state, action) {
  switch (action.type) {
    case "SELECT_OPTION":
      const isCorrect =
        action.payload === state.questions[state.currentQuestion].answer;
      return {
        ...state,
        selectedOption: action.payload,
        feedback: isCorrect
          ? "Correct! 🎉"
          : `Incorrect! The correct answer is ${
              state.questions[state.currentQuestion].answer
            }`,
      };
    case "NEXT_QUESTION":
      return {
        ...state,
        score:
          state.selectedOption === state.questions[state.currentQuestion].answer
            ? state.score + 1
            : state.score,
        currentQuestion: state.currentQuestion + 1,
        selectedOption: "",
        feedback: null,
        showScore: state.currentQuestion + 1 === state.questions.length,
      };
    case "RESTART_QUIZ":
      return { ...initialState };
    default:
      return state;
  }
}

function QuestionBank() {
  const [state, dispatch] = useReducer(quizReducer, initialState);
  const [timeLeft, setTimeLeft] = useState(20);
  const [highScore, setHighScore] = useState(
    localStorage.getItem("highScore") || 0
  );
  const {
    questions,
    currentQuestion,
    selectedOption,
    score,
    showScore,
    feedback,
  } = state;

  useEffect(() => {
    if (!showScore && timeLeft > 0) {
      const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0) {
      dispatch({ type: "NEXT_QUESTION" });
      setTimeLeft(10);
    }
  }, [timeLeft, showScore]);

  useEffect(() => {
    if (showScore && score > highScore) {
      setHighScore(score);
      localStorage.setItem("highScore", score);
    }
  }, [showScore, score, highScore]);

  const handleOptionSelect = (option) =>
    dispatch({ type: "SELECT_OPTION", payload: option });

  const handleNextQuestion = () => {
    dispatch({ type: "NEXT_QUESTION" });
    setTimeLeft(10);
  };

  const handleRestartQuiz = () => {
    dispatch({ type: "RESTART_QUIZ" });
    setTimeLeft(10);
  };

  return (
    <Card className="p-4">
      <div className="quiz-container">
        {showScore ? (
          <div className="text-center">
            <h2>
              Your Score: {score} / {questions.length}
            </h2>
            <h4>High Score: {highScore}</h4>
            <Button variant="primary" onClick={handleRestartQuiz}>
              Restart Quiz
            </Button>
          </div>
        ) : (
          <div>
            <ProgressBar
              now={(currentQuestion / questions.length) * 100}
              label={`${currentQuestion + 1}/${questions.length}`}
              className="mb-3"
            />
            <h4>
              Question {questions[currentQuestion].id}:<br />
              {questions[currentQuestion].question}
            </h4>
            <div className="mt-3">
              {questions[currentQuestion].options.map((option, index) => (
                <Button
                  key={index}
                  variant={
                    selectedOption === option ? "success" : "outline-secondary"
                  }
                  className="m-2"
                  onClick={() => handleOptionSelect(option)}
                  disabled={selectedOption}
                >
                  {option}
                </Button>
              ))}
            </div>
            {feedback && (
              <div className="feedback mt-3">
                {feedback.includes("Correct") ? (
                  <span className="text-success">
                    <FaCheckCircle /> {feedback}
                  </span>
                ) : (
                  <span className="text-danger">
                    <FaTimesCircle /> {feedback}
                  </span>
                )}
              </div>
            )}
            <div className="time-left mt-3">
              <span style={{ color: timeLeft < 5 ? "red" : "black" }}>
                Time Left: {timeLeft}s
              </span>
            </div>
            <Button
              variant="primary"
              className="mt-3"
              disabled={!selectedOption}
              onClick={handleNextQuestion}
            >
              {currentQuestion === questions.length - 1
                ? "Finish Quiz"
                : "Next Question"}
            </Button>
          </div>
        )}
      </div>
    </Card>
  );
}

export default QuestionBank;
