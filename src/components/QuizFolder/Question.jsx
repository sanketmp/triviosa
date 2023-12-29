import React, { useState, useEffect } from "react";

const decodeHTML = function (html) {
  const txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
};

const Question = () => {
  // Create state variables for score and questions
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [answerSelected, setAnswerSelected] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [options, setOptions] = useState([]);

  // Fetch the questions from the API
  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=10")
      .then((res) => res.json())
      .then((response) => {
        // Decode the HTML entities in the questions

        const decodedQuestions = response.results.map((q) => {
          return {
            ...q,
            question: decodeHTML(q.question),
            correct_answer: decodeHTML(q.correct_answer),
            incorrect_answers: q.incorrect_answers.map((a) => decodeHTML(a)),
          };
        });

        setQuestions(decodedQuestions);
      })
      .catch((err) => console.log(err.message));
  });

  // Get the current question and answer
  const questionIndex = score;
  const question = questions[questionIndex];
  const answer = question && question.correct_answer;

  // Shuffle the options
  const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  };

  useEffect(() => {
    if (!question) {
      return "Nope";
    }
    let answers = [...question.incorrect_answers];
    answers.splice(
      getRandomInt(question.incorrect_answers.length),
      0,
      question.correct_answer
    );

    setOptions(answers);
  });

  // Handle the user's answer
  const handleListItemClick = (event) => {
    setAnswerSelected(true);
    setSelectedAnswer(event.target.textContent);

    if (event.target.textContent === answer) {
      // Increase the score if the answer is correct
      setScore(score + 1);
    }

    if (questionIndex + 1 < questions.length) {
      // Move to the next question after a delay
      setTimeout(() => {
        setAnswerSelected(false);
        setSelectedAnswer(null);
      }, 2500);
    }
  };

  // Style the options
  const getClass = (option) => {
    if (!answerSelected) {
      return "";
    }

    if (option === answer) {
      return "correct";
    }

    if (option === selectedAnswer) {
      return "selected";
    }
  };

  if (!question) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <p>Question {questionIndex + 1}</p>
      <h3>{question.question}</h3>
      <ul>
        {options.map((option, i) => (
          <li
            key={i}
            onClick={handleListItemClick}
            className={getClass(option)}
          >
            {option}
          </li>
        ))}
      </ul>
      <div>
        Score: {score} / {questions.length}
      </div>
    </div>
  );
};
export default Question;
