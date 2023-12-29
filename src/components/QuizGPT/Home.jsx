// Home component
import React, { useState } from "react";
import Question from "./Question";

const Home = () => {
  const [quizStarted, setQuizStarted] = useState(false);
  const [questions, setQuestions] = useState([]);

  // Function to start a new quiz and fetch questions from the API
  const startQuiz = async () => {
    try {
      // Make an API request to start a new quiz and get a quiz ID
    //   const response = await fetch("https://example.com/api/start-quiz", {
    //     method: "POST",
    //   });
    //   const data = await response.json();
    //   const quizId = data.quizId;

      // Make another API request to fetch questions for the quiz ID
      const response2 = await fetch(
        "https://opentdb.com/api.php?amount=10&category=24"
      );
      const data2 = await response2.json();
      const questions = data2.questions;

      // Set the state variables
      setQuizStarted(true);
      setQuestions(questions);
    } catch (error) {
      // Handle any errors
      console.error(error);
    }
  };

  return (
    <div className="home">
      {quizStarted ? (
        // Render the Question component and pass the questions as props
        <Question questions={questions} />
      ) : (
        // Render a button to start the quiz
        <button onClick={startQuiz}>Start</button>
      )}
    </div>
  );
};

export default Home;
