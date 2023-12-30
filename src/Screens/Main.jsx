//import { Button, MenuItem, TextField } from "@material-ui/core";
import { TextField, MenuItem, Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "../components/UI/Error-message";
import Categories from "../Data/Categories";
import "./Main.css";

const Main = ({ fetchQuestions }) => {
  //const [category, setCategory] = useState("");
  //const [difficulty, setDifficulty] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = () => {
    // if (!category || !difficulty || !name) {
    //   setError(true);
    //   return;
    // } else {
    //   setError(false);
    //   //fetchQuestions(category, difficulty);
    //   fetchQuestions();
    //   navigate("/quiz");
    // }
    setError(false);
    fetchQuestions();
    navigate("/quiz");
  };

  return (
    <div className="content">
      <div className="settings">
        <div className="settings__select">
          {/*error && <ErrorMessage>Please fill all fields.</ErrorMessage>*/}
          {/* <TextField
            style={{ marginBottom: 25 }}
            label="Enter Your Name"
            variant="outlined"
            onChange={(e) => setNames(e.target.value)}
          /> */}
          {/* <TextField
            select
            label="Select Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            variant="outlined"
            style={{ marginBottom: 30 }}
          >
            {Categories.map((cat) => (
              <MenuItem key={cat.category} value={cat.value}>
                {cat.category}
              </MenuItem>
            ))}
          </TextField> */}
          {/* <TextField
            select
            label="Select Difficulty"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            variant="outlined"
            style={{ marginBottom: 30 }}
          >
            <MenuItem key="Easy" value="easy">
              Easy
            </MenuItem>
            <MenuItem key="Medium" value="medium">
              Medium
            </MenuItem>
            <MenuItem key="Hard" value="hard">
              Hard
            </MenuItem>
          </TextField> */}
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleSubmit}
          >
            Start
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Main;
