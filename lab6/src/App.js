import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Sử dụng Routes thay cho Switch
import Home from "./Components/HomePage";
import About from "./Components/AboutPage";
import News from "./Components/NewsPage";
import QuizPage from "./Components/QuizPage";
import Contact from "./Components/ContactPage";
import Quiz from "./Components/Quiz";
import QuizReviewPage from "./Components/QuizReviewPage";
import { HistoryProvider } from './Components/data/Context';

const App = () => {
  return (
    <HistoryProvider>
      <Router>
        <Navbar />
        <Routes> {/* Thay Switch bằng Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<News />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/quiz/start" element={<Quiz />} />
          <Route path="/quiz/review" element={<QuizReviewPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </HistoryProvider>
  );
};

export default App;
