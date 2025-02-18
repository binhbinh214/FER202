import Quiz from "./Components/Quiz.js";
import { jsQuizz } from "./Components/Data.js";

function App() {
  return <Quiz questions={jsQuizz.questions} />;
}

export default App;
