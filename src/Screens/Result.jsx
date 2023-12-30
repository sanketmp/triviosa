import { Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../components/Timer/ProgressBar";
import "./Result.css";

const Result = ({ fetchQuestions, scoreResult, setScore }) => {
  const [corrects, setCorrects] = useState(scoreResult);
  const navigate = useNavigate();
  const handleSubmitFromResultPage = () => {
    fetchQuestions();
    navigate("/quiz");
    setCorrects(0);
    setScore(0);
  };

  return (
    <div className="result">
      <span className="title">Your Result</span>
      <ProgressBar count={scoreResult} type="res" />
      <div className="report">
        <div className="right">
          <p>&bull; {corrects} Correct</p>
        </div>
        <div className="wrong">
          <p>&bull; {10 - corrects} Incorrect</p>
        </div>
      </div>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        style={{ alignSelf: "center", marginTop: 20 }}
        onClick={handleSubmitFromResultPage}
      >
        Start again
      </Button>
    </div>
  );
};

export default Result;
