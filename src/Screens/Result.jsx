import { Button } from "@mui/material";

import { useNavigate } from "react-router-dom";
import "./Result.css";

const Result = ({ fetchQuestions, score }) => {
  const navigate = useNavigate();
  const handleSubmitFromResultPage = () => {
    fetchQuestions();
    navigate("/quiz");
  };
  

  return (
    <div className="result">
      <span className="title">Final Score : {score}</span>
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
