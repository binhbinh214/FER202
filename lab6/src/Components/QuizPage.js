/* eslint-disable no-unused-vars */
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import { HistoryContext } from "./data/Context";
import "../assets/QuizPage.scss";

const QuizPage = () => {
  const [agree, setAgree] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const { history, setHistory } = useContext(HistoryContext);
  const navigate = useNavigate();

  const handleStartQuiz = () => {
    navigate("/quiz/start");
  };

  const handleCaptchaVerification = (response) => {
    if (response) {
      setIsVerified(true);
    }
  };

  const handleCaptchaExpired = () => {
    setIsVerified(false);
  };

  const handleAgreeChange = () => {
    setAgree(!agree);
  };

  const addHistory = (score, startTime) => {
    setHistory((prevHistory) => [...prevHistory, { score, startTime }]);
  };

  return (
    <div className="quiz-container">
      <h2>JavaScript Quiz</h2>
      <div className="quiz-card">
        <p>
          <strong>Total Questions:</strong> 10
        </p>
        <p>
          <strong>Description:</strong> This is a quiz about React and
          JavaScript.
        </p>
        <p>
          <strong>Notes:</strong> 10 points for each correct answer
        </p>

        <ReCAPTCHA
          sitekey="6LfgG4QpAAAAABneDgEzFb1y4X4BNwwOrJ2ZVBFQ"
          onChange={handleCaptchaVerification}
          onExpired={handleCaptchaExpired}
          className="captcha-container"
        />

        <div className="agree-section">
          <input
            type="checkbox"
            checked={agree}
            onChange={handleAgreeChange}
            disabled={!isVerified}
          />
          {/* Escape ' to &apos; */}
          <label>I agree and Start now</label>
        </div>
        <button disabled={!agree || !isVerified} onClick={handleStartQuiz}>
          Start Quiz
        </button>
      </div>

      <div className="history-card">
        <h3>Quiz History</h3>
        {history.length === 0 ? (
          <p
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            Haven&apos;t taken any quiz yet
          </p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Total Score</th>
                <th>Status</th>
                <th>Start Time</th>
              </tr>
            </thead>
            <tbody>
              {history.map((item, index) => {
                const date = new Date(item.startTime);
                const formattedDate = date
                  .toLocaleString("vi-VN", { timeZone: "Asia/Ho_Chi_Minh" })
                  .replace(/\//g, "-")
                  .replace(",", "");

                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td
                      style={{
                        fontWeight: "bold",
                      }}
                    >
                      {item.score}
                    </td>
                    <td
                      style={{
                        color: item.score >= 70 ? "green" : "red",
                        fontWeight: "bold",
                      }}
                    >
                      {item.score >= 70 ? "Passed" : "Failed"}
                    </td>
                    <td>{formattedDate}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default QuizPage;
