import { jsQuizz } from "./data/Quiz_Data.js";
import { useNavigate, useLocation } from "react-router-dom";
import "../assets/QuizReview.scss";

const QuizReviewPage = () => {
  const navigate = useNavigate(); 
  const location = useLocation();
  const userAnswers = location.state ? location.state.userAnswers : [];

  const handleBack = () => {
    navigate("/quiz");
  };

  return (
    <div className="quiz-review">
      <h2>Quiz Review</h2>
      {jsQuizz.questions.map((question, index) => (
        <div
          className={`review ${
            userAnswers[index] === question.correctAnswer
              ? "correct"
              : "incorrect"
          }`}
          key={index}
          id={`question-${index + 1}`}
        >
          <h3>
            Q{index + 1}: {question.question}
          </h3>
          {question.choices.map((choice, choiceIndex) => (
            <p
              key={choiceIndex}
              className={`answer-block ${
                userAnswers[index] === choice ? "selected-answer" : ""
              }`}
            >
              {choice}
            </p>
          ))}
          <p className="answer-block correct-answer">
            Correct answer: {question.correctAnswer}
          </p>
        </div>
      ))}
      <button onClick={handleBack}>Finish Review</button>
    </div>
  );
};

export default QuizReviewPage;
