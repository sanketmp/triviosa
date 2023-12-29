// import axios from "axios";
// import { useState, useEffect } from "react";

// const Start = () => {
//   const [data, setData] = useState([]);
//   //const [url, seturl] = useState("");

//   const getData = () => {
//     axios
//       .get("https://opentdb.com/api.php?amount=10")
//       .then((response) => setData(response.results))
//       .catch((error) => console.log(error.message));
//   };

//   useEffect(() => getData(), []);
//   return <div style={{ color: "white" }}>{[data]}</div>;
// };

// export default Start;

import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

function Start(props) {
  // Create state variables for loading, questions, index, and score

  const [questions, setQuestions] = useState([]);

  // Wrap the handleQuery function in a useEffect hook
  const getData = () => {
    let apiUrl = "https://opentdb.com/api.php?amount=10";

    fetch(apiUrl)
      .then((res) => res.json())
      .then((response) => {
        setQuestions(response.results);
      })
      .catch((err) => console.log(err.message));
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {/* <button onClick={handleQuery}>{props.text}</button> */}
      <div style={{ color: "white" }}>
        {questions &&
          questions.map((q) => {
            return (
              <div key={uuidv4()}>
                <p>{q.type}</p>
                <p>{q.difficulty}</p>
                <p>{q.category}</p>
                <p>{q.question}</p>
                <p>Coreect: {q.correct_answer}</p>
                {q.incorrect_answers.map((ic) => {
                  return <p key={uuidv4()}>=: {ic}</p>;
                })}
              </div>
            );
          })}
      </div>
    </>
  );
}
export default Start;
