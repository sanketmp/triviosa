// Report component
import React from "react";
import Home from "./Home";

const Report = ({ scoreReport }) => {
  const { totalScore, correctAnswers, incorrectAnswers } = scoreReport;

  // Function to start the quiz again
  const startAgain = () => {
    // Render the Home component
    return <Home />;
  };

  return (
    <div className="report">
      <h1>Score Report</h1>
      <p>Total score: {totalScore}</p>
      <p>Correct answers: {correctAnswers}</p>
      <p>Incorrect answers: {incorrectAnswers}</p>
      <button onClick={startAgain}>Start Again</button>
    </div>
  );
};

export default Report;
