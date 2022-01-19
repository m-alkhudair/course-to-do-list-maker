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

  //We got rid of the in-line styles find them in github date 19/01/22
  //better this way because in-line overrides everything and can make duplicate styles
  //pay attention to the className attribute!
  // you can repeat the same technique to make more dynamically added classes
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid ? 'invalid' : ''}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
