import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";

import Header from "./components/UI/Header";
import Main from "./Screens/Main";
import Quiz from "./Screens/Quiz";
import Result from "./Screens/Result";

const App = () => {
  const [questions, setQuestions] = useState();
  const [score, setScore] = useState(0);

  const fetchQuestions = async () => {
    const { data } = await axios.get(
      "https://opentdb.com/api.php?amount=10&category=18&type=multiple"
    );

    setQuestions(data.results);
  };

  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Main fetchQuestions={fetchQuestions} />} />
          <Route
            path="/quiz"
            element={
              <Quiz
                questions={questions}
                scoreQuiz={score}
                setScore={setScore}
                setQuestions={setQuestions}
              />
            }
          />
          <Route
            path="/result"
            element={
              <Result
                fetchQuestions={fetchQuestions}
                scoreResult={score}
                setScore={setScore}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
