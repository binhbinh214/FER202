import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { jsQuizz } from "./data/Quiz_Data.js";
import { HistoryContext } from "./data/Context.js";
import "../assets/Quiz.scss";

const QuizStartPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState(
    Array(jsQuizz.questions.length).fill(null)
  );
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [quizFinished, setQuizFinished] = useState(false);
  const { addHistory } = useContext(HistoryContext);
  const navigate = useNavigate(); 

  useEffect(() => {
    setSelectedAnswer(userAnswers[currentQuestion]);
  }, [currentQuestion]);

  const [timeLeft, setTimeLeft] = useState(() => {
    const savedTimeLeft = localStorage.getItem("timeLeft");
    return savedTimeLeft ? JSON.parse(savedTimeLeft) : 600;
  });

  useEffect(() => {
    const timerId = setInterval(() => {
      if (!quizFinished) {
        setTimeLeft((timeLeft) => {
          const newTimeLeft = timeLeft - 1;
          localStorage.setItem("timeLeft", JSON.stringify(newTimeLeft));
          return newTimeLeft;
        });
      }
    }, 1000);
    return () => clearInterval(timerId);
  }, [quizFinished]);

  useEffect(() => {
    if (quizFinished) {
      localStorage.removeItem("timeLeft");
    }
  }, [quizFinished]);

  useEffect(() => {
    if (timeLeft === 0) {
      handleFinish();
    }
  }, [timeLeft]);

  const resetTimeLeft = () => {
    localStorage.removeItem("timeLeft");
    setTimeLeft(600);
  };

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);
    setUserAnswers((prev) => {
      const copy = [...prev];
      copy[currentQuestion] = answer;
      return copy;
    });
    if (jsQuizz.questions[currentQuestion].correctAnswer === answer) {
      setScore((prevScore) => prevScore + 10);
    }
  };

  const handleNext = () => {
    if (currentQuestion < jsQuizz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      alert(`Quiz finished. Your score is ${score}`);
    }
  };

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleFirst = () => {
    setCurrentQuestion(0);
  };

  const handleLast = () => {
    setCurrentQuestion(jsQuizz.questions.length - 1);
  };

  const handleFinish = () => {
    if (timeLeft > 0) {
      Swal.fire({
        title: "Are you sure?",
        text: "You still have time left. Are you sure you want to submit?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, submit!",
      }).then((result) => {
        if (result.isConfirmed) {
          finishQuiz();
        }
      });
    } else {
      finishQuiz();
    }
  };

  const finishQuiz = () => {
    addHistory(score, new Date().toISOString());
    setQuizFinished(true);
    const correctAnswers = userAnswers.filter(
      (answer, index) => answer === jsQuizz.questions[index].correctAnswer
    ).length;

    Swal.fire({
      title: "Quiz Results",
      html: `
        <h2 style ="color: red;">Total Score: ${score}</h2>
        <p>Total Correct Answers: ${correctAnswers}</p>
        <p>Total Wrong Answers: ${jsQuizz.questions.length - correctAnswers}</p>
      `,
      showCancelButton: true,
      showConfirmButton: true,
      confirmButtonText: "Review Quiz",
      cancelButtonText: "Re-Start",
      allowOutsideClick: false,
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/quiz/review", {
          state: { userAnswers: userAnswers },
        });
        resetTimeLeft();
      } else if (result.isCancelled) {
        setCurrentQuestion(0);
        setUserAnswers(Array(jsQuizz.questions.length).fill(null));
        setScore(0);
        setSelectedAnswer(null);
      } else {
        navigate("/quiz");
      }
    });
  };

  const handleQuizPage = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to go back and cancel the results!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, go back!",
      allowOutsideClick: false,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your quiz has been deleted.",
          icon: "success",
        });
        setTimeout(() => {
          Swal.close();
          navigate("/quiz");
          setCurrentQuestion(0);
          setUserAnswers(Array(jsQuizz.questions.length).fill(null));
          setScore(0);
          setSelectedAnswer(null);
        }, 1000);
        resetTimeLeft();
      }
    });
  };

  return (
    <div className="quiz-start">
      <h2>JavaScript Quiz</h2>
      <div className="quiz">
        <div className={`timer ${minutes < 1 ? "warning" : ""}`}>
          Time Left: {minutes}:{seconds < 10 ? "0" : ""}
          {seconds}
        </div>
        <h3>
          Q{currentQuestion + 1}: {jsQuizz.questions[currentQuestion].question}
        </h3>
        <div className="answer-grid">
          {jsQuizz.questions[currentQuestion].choices.map((choice, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(choice)}
              className={selectedAnswer === choice ? "selected" : ""}
            >
              {choice}
            </button>
          ))}
        </div>
        <div className="button-group">
          <div className="navigation">
            <button onClick={handleFirst} disabled={currentQuestion === 0}>
              First
            </button>
            <button onClick={handlePrev} disabled={currentQuestion === 0}>
              Prev
            </button>
            <button
              onClick={handleNext}
              disabled={currentQuestion === jsQuizz.questions.length - 1}
            >
              Next
            </button>
            <button
              onClick={handleLast}
              disabled={currentQuestion === jsQuizz.questions.length - 1}
            >
              Last
            </button>
          </div>

          <div className="question-id">
            {userAnswers.map((answer, index) => (
              <button
                key={index}
                className={
                  currentQuestion === index
                    ? "current-question"
                    : answer === null
                    ? "unanswered-question"
                    : "answered-question"
                }
                onClick={() => setCurrentQuestion(index)}
              >
                {index + 1}
              </button>
            ))}
          </div>

          <div className="control">
            <button className="quizpage-button" onClick={handleQuizPage}>
              QuizPage
            </button>
            <button className="finish-button" onClick={handleFinish}>
              Finish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizStartPage;
