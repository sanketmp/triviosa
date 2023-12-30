import { useState } from "react"
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "../UI/Error-message";
import ProgressBar from "../Timer/ProgressBar";
import "./Question.css";

const Question = ({
  currQues,
  setCurrQues,
  questions,
  options,
  correct,
  setScore,
  scoreQuestion,
}) => {
  const [selected, setSelected] = useState();
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleSelect = (i) => {
    if (selected === i && selected === correct) return "select";
    else if (selected === i && selected !== correct) return "incorrect";
    else if (i === correct) return "select";
  };

  const handleCheck = (i) => {
    setSelected(i);
    if (i === correct) {
      setScore(scoreQuestion + 1);
    }
    setError(false);
  };

  const handleNext = () => {
    if (currQues > 8) {
      navigate("/result");
    } else if (selected) {
      setCurrQues(currQues + 1);
      setSelected();
    } else setError("Please select an option first");
  };

  return (
    <>
      <ProgressBar count={currQues} type="que" />
      <div className="question">
        <div className="singleQuestion">
          <h2>{questions[currQues].question}</h2>
          <div className="choices">
            {error && <ErrorMessage>{error}</ErrorMessage>}
            {options &&
              options.map((i) => (
                <button
                  className={`singleOption  ${selected && handleSelect(i)}`}
                  key={i}
                  onClick={() => handleCheck(i)}
                  disabled={selected}
                >
                  {i}
                </button>
              ))}
          </div>
          <div className="controls">
            <Button
              variant="contained"
              color="primary"
              size="large"
              style={{ width: 185 }}
              onClick={handleNext}
            >
              {currQues > 10 ? "Submit" : "Next"}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Question;
