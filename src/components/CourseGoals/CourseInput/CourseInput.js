import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  // Form Validation
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    // RESTTING functionality
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    // FORM Validation
    // trim() is a built-in method that removes excees white space in the begining or the end
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
      // because we don't want to run the last func, function execution stops after the return word
    }
    props.onAddGoal(enteredValue);
  };

// in-line styles have presedence so they will override other styles, even when using the same style as the original css file in the inline style attribute there is duplication.
  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label style={{ color: !isValid ? "red" : "black" }}>Course Goal</label>
        <input
          style={{
            borderColor: !isValid ? "red" : "#ccc",
            background: !isValid ? "salmon" : "transparent",
          }}
          type="text"
          onChange={goalInputChangeHandler}
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
