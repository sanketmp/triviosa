// Question component
import React, { useState, useEffect } from "react";
import Report from "./Report";

const Question = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  // const [startTime, setStartTime] = useState(0);
  // const [endTime, setEndTime] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [scoreReport, setScoreReport] = useState({});

  // Function to handle the selection of an option
  const handleSelect = (option) => {
    // If the question has multiple correct choices, toggle the selection
    if (questions[currentQuestion].multiple) {
      if (selectedOptions.includes(option)) {
        // Remove the option from the selected options
        setSelectedOptions(selectedOptions.filter((o) => o !== option));
      } else {
        // Add the option to the selected options
        setSelectedOptions([...selectedOptions, option]);
      }
    } else {
      // If the question has a single correct choice, set the selection
      setSelectedOptions([option]);
    }
  };

  // Function to handle the submission of the user's response
  const handleSubmit = async () => {
    // Calculate the time taken for the question
    //const timeTaken = endTime - startTime;

    // Make an API request to submit the user's response and get feedback
    try {
      const response = await fetch("https://example.com/api/submit-response", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          questionId: questions[currentQuestion].id,
          selectedOptions: selectedOptions,
          timeTaken: timeTaken,
        }),
      });
      const data = await response.json();
      const feedback = data.feedback;

      // Show the feedback to the user
      alert(feedback);
    } catch (error) {
      // Handle any errors
      console.error(error);
    }

    // Reset the selected options
    setSelectedOptions([]);

    // Check if there are more questions
    if (currentQuestion < questions.length - 1) {
      // Move to the next question
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Finish the quiz and get the score report
      finishQuiz();
    }
  };

  // Function to finish the quiz and get the score report
  const finishQuiz = async () => {
    try {
      // Make an API request to finish the quiz and get the score report
      const response = await fetch("https://example.com/api/finish-quiz", {
        method: "POST",
      });
      const data = await response.json();
      const scoreReport = data.scoreReport;

      // Set the state variables
      setQuizFinished(true);
      setScoreReport(scoreReport);
    } catch (error) {
      // Handle any errors
      console.error(error);
    }
  };

  // Use an effect hook to set the start time when the question changes
  useEffect(() => {
    setStartTime(Date.now());
  }, [currentQuestion]);

  // Use an effect hook to set the end time when the user selects an option
  useEffect(() => {
    setEndTime(Date.now());
  }, [selectedOptions]);

  return (
    <div className="question">
      {quizFinished ? (
        // Render the Report component and pass the score report as props
        <Report scoreReport={scoreReport} />
      ) : (
        // Render the current question and the options
        <>
          <h1>Question {currentQuestion + 1}</h1>
          <p>{questions[currentQuestion].text}</p>
          {questions[currentQuestion].image && (
            // Render the optional image if present
            <img src={questions[currentQuestion].image} alt="Question image" />
          )}
          <ul>
            {questions[currentQuestion].options.map((option) => (
              // Render the options and highlight the selected ones
              <li
                key={option}
                className={selectedOptions.includes(option) ? "selected" : ""}
                onClick={() => handleSelect(option)}
              >
                {option}
              </li>
            ))}
          </ul>
          <button
            onClick={handleSubmit}
            // Disable the button if no option is selected
            disabled={selectedOptions.length === 0}
          >
            Submit
          </button>
        </>
      )}
    </div>
  );
};

export default Question;
