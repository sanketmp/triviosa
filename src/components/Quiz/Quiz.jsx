import { useState } from "react";
import Button from "../UI/Button";
import { INITIAL_RESULT } from "./questions";

const Quiz = ({ questions }) => {
  const [currentQue, setCurrentQue] = useState(0);
  const [answerIndex, setAnswerIndex] = useState(null);
  const [answer, setAnswer] = useState(null);
  const [result, setresult] = useState(INITIAL_RESULT);
  const [showresult, setshowresult] = useState(false);
  const { question, choices, correctAnswer } = questions[currentQue];

  const onAnswerClick = (ans, ind) => {
    setAnswerIndex(ind);
    ans === correctAnswer ? setAnswer(true) : setAnswer(false);
  };

  const onclicknext = () => {
    setAnswerIndex(null);
    setresult((prev) =>
      answer
        ? {
            ...prev,
            score: prev.score + 1,
            CorrectAnswers: prev.CorrectAnswers + 1,
          }
        : {
            ...prev,
            IncorrectAnswers: prev.IncorrectAnswers + 1,
          }
    );
    if (currentQue !== questions.length - 1) {
      setCurrentQue((prev) => prev + 1);
    } else {
      setCurrentQue(0);
      setshowresult(true);
    }
  };

  const tryagain = () => {
    setresult(INITIAL_RESULT);
    setshowresult(false);
  };

  return (
    <div className="quiz-c">
      {!showresult ? (
        <>
          <span>{currentQue + 1}&nbsp;</span>
          <span>of {questions.length}</span>
          <h2>{question}</h2>
          <ul>
            {choices.map((ans, ind) => {
              return (
                <li
                  className={answerIndex === ind ? "selectedAns" : null}
                  onClick={() => onAnswerClick(ans, ind)}
                  key={ans}
                >
                  {ans}
                </li>
              );
            })}
          </ul>

          <Button onClick={onclicknext}>
            {currentQue === questions.length - 1 ? "Submit Quiz" : "Next"}
          </Button>
        </>
      ) : (
        <div className="resultfinal">
          <h3>Result</h3>
          <p>
            Total Questions: <span>{questions.length}</span>
          </p>
          <p>
            Total Score: <span>{result.score}</span>
          </p>
          <p>
            Correct Answers: <span>{result.CorrectAnswers}</span>
          </p>
          <p>
            Incorrect Answers: <span>{result.IncorrectAnswers}</span>
          </p>
          <Button onClick={tryagain}>TrY Again this</Button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
