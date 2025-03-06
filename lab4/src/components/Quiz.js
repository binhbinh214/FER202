// src/components/Quiz.js
import React, { useState, useEffect, useContext, createContext } from "react";
import { Card, Form, Button, ListGroup } from "react-bootstrap";
import { quizData } from "./QuizData";

const QuizContext = createContext();

function Quiz() {
  const [questions, setQuestions] = useState(quizData);
  const [newQuestion, setNewQuestion] = useState("");
  const [newAnswers, setNewAnswers] = useState(["", "", ""]);
  const [newCorrectAnswer, setNewCorrectAnswer] = useState("");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [score, setScore] = useState(null);

  // useEffect để kiểm tra khi hoàn thành tất cả câu hỏi
  useEffect(() => {
    if (
      Object.keys(selectedAnswers).length === questions.length &&
      score === null
    ) {
      // Tính điểm khi tất cả câu hỏi đã được trả lời
      const correctCount = questions.reduce((acc, q, index) => {
        return acc + (selectedAnswers[index] === q.correctAnswer ? 1 : 0);
      }, 0);
      setScore(correctCount);
    }
  }, [selectedAnswers, questions, score]);

  // Thêm câu hỏi mới
  const handleAddQuestion = (e) => {
    e.preventDefault();
    if (newQuestion && newAnswers.every((ans) => ans) && newCorrectAnswer) {
      const newQuiz = {
        question: newQuestion,
        answers: newAnswers,
        correctAnswer: newCorrectAnswer,
      };
      setQuestions([...questions, newQuiz]);
      setNewQuestion("");
      setNewAnswers(["", "", ""]);
      setNewCorrectAnswer("");
      setScore(null); // Reset điểm khi thêm câu hỏi mới
      setSelectedAnswers({}); // Reset các câu trả lời đã chọn
      setCurrentQuestionIndex(0); // Quay về câu hỏi đầu tiên
    }
  };

  // Chọn câu trả lời
  const handleAnswerSelect = (answer) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQuestionIndex]: answer,
    }));
  };

  // Chuyển sang câu hỏi tiếp theo
  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      // Đã hoàn thành, không làm gì (score sẽ được tính qua useEffect)
    }
  };

  // Reset toàn bộ trạng thái
  const handleRestart = () => {
    setQuestions(quizData);
    setSelectedAnswers({});
    setScore(null);
    setNewQuestion("");
    setNewAnswers(["", "", ""]);
    setNewCorrectAnswer("");
    setCurrentQuestionIndex(0);
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <QuizContext.Provider value={{ selectedAnswers, handleAnswerSelect }}>
      <Card className="quiz-card">
        <div className="quiz-container">
          {score !== null ? (
            // Hiển thị kết quả khi hoàn thành
            <div className="score-display text-center">
              <h2 className="quiz-title">Quiz Completed!</h2>
              <p className="score-text">Your score: {score}</p>
              <Button className="btn-restart" onClick={handleRestart}>
                Restart
              </Button>
            </div>
          ) : (
            // Giao diện chính
            <>
              <h2 className="quiz-title">Add New Question</h2>
              <Form onSubmit={handleAddQuestion}>
                <Form.Group controlId="newQuestion" className="mb-3">
                  <Form.Label>Question:</Form.Label>
                  <Form.Control
                    type="text"
                    value={newQuestion}
                    onChange={(e) => setNewQuestion(e.target.value)}
                    placeholder="Enter question"
                    required
                  />
                </Form.Group>

                <Form.Label>Answers (at least 3):</Form.Label>
                {newAnswers.map((answer, index) => (
                  <Form.Group
                    controlId={`answer${index}`}
                    key={index}
                    className="mb-2"
                  >
                    <Form.Control
                      type="text"
                      value={answer}
                      onChange={(e) => {
                        const updatedAnswers = [...newAnswers];
                        updatedAnswers[index] = e.target.value;
                        setNewAnswers(updatedAnswers);
                      }}
                      placeholder={`Answer ${index + 1}`}
                      required
                    />
                  </Form.Group>
                ))}

                <Form.Group controlId="correctAnswer" className="mb-3">
                  <Form.Label>Correct Answer:</Form.Label>
                  <Form.Control
                    as="select"
                    value={newCorrectAnswer}
                    onChange={(e) => setNewCorrectAnswer(e.target.value)}
                    required
                  >
                    <option value="">Select correct answer</option>
                    {newAnswers.map((answer, index) => (
                      <option key={index} value={answer}>
                        {answer || `Answer ${index + 1}`}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>

                <Button type="submit" className="btn-add-question">
                  Add Question
                </Button>
              </Form>

              <hr className="my-4" />

              <h2 className="quiz-title">Quiz</h2>
              {currentQuestion && (
                <div className="quiz-question">
                  <h3>Question {currentQuestionIndex + 1}</h3>
                  <p className="question-text">{currentQuestion.question}</p>
                  <Form>
                    {currentQuestion.answers.map((answer, index) => (
                      <Form.Check
                        key={index}
                        type="radio"
                        id={`answer-${currentQuestionIndex}-${index}`}
                        label={answer}
                        name={`question-${currentQuestionIndex}`}
                        checked={
                          selectedAnswers[currentQuestionIndex] === answer
                        }
                        onChange={() => handleAnswerSelect(answer)}
                        className="mb-2"
                      />
                    ))}
                  </Form>
                  <Button
                    className="btn-next mt-3"
                    onClick={handleNext}
                    disabled={!selectedAnswers[currentQuestionIndex]}
                  >
                    Next
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </Card>
    </QuizContext.Provider>
  );
}

export default Quiz;
