import React, { useContext } from "react";
import { QuizContext } from "../context/QuizContext";
const QuestionBank = () => {
  const { state, dispatch } = useContext(QuizContext);

  const handleOptionSelect = (option) => {
    dispatch({ type: "SELECT_OPTION", payload: option });
  };

  const handleNextQuestion = () => {
    dispatch({ type: "NEXT_QUESTION" });
  };

  const handleRestartQuiz = () => {
    dispatch({ type: "RESTART_QUIZ" });
  };

  if (state.currentQuestion >= state.questions.length) {
    return (
      <div>
        <h1>Your score: {state.score}</h1>
        <button onClick={handleRestartQuiz}>Restart Quiz</button>
      </div>
    );
  }

  const currentQuestion = state.questions[state.currentQuestion];
  return (
    <div>
      <h2>{currentQuestion.question}</h2> {/* Hiển thị câu hỏi */}
      <div>
        {/* Hiển thị các lựa chọn */}
        {currentQuestion.options.map((option) => (
          <button
            key={option}
            onClick={() => handleOptionSelect(option)}
            style={{
              backgroundColor:
                state.selectedOption === option ? "lightblue" : "",
            }}
          >
            {option}
          </button>
        ))}
      </div>
      <button
        onClick={handleNextQuestion}
        disabled={state.selectedOption === ""}
      >
        Next
      </button>{" "}
      {/* Disable nút Next khi chưa chọn đáp án */}
    </div>
  );
};

export default QuestionBank;
