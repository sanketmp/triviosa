import { useEffect, useState } from "react";
import axios from "axios";

const Settings = () => {
  const [options, setOptions] = useState(null);
  const [category, setCategory] = useState();
  const [difficulty, setDificulty] = useState();
  const [amount, setAmount] = useState();

  return (
    <div>
      <div>
        <h2>Select Category:</h2>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option>Any</option>
          {categories &&
            categories.length &&
            categories.map((option) => (
              <option value={option.id} key={option.id}>
                {option.name}
              </option>
            ))}
        </select>
      </div>
      <div>
        <h2>Select Difficulty:</h2>
        <select
          value={difficulty}
          onChange={(e) => setDificulty(e.target.value)}
        >
          <option value="" key="difficulty-0">
            Any
          </option>
          <option value="easy" key="difficulty-1">
            Easy
          </option>
          <option value="medium" key="difficulty-2">
            Medium
          </option>
          <option value="hard" key="difficulty-3">
            Hard
          </option>
        </select>
      </div>
      <div>
        <h2>How many questions do you want?</h2>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>

      <FetchButton text="Start the Quiz!" />
    </div>
  );
};

export default Settings;
