import React, { useState } from "react";
import styled from 'styled-components';

import Button from "../../UI/Button/Button";
import "./CourseInput.css";

// New Component, we can write more than one component per file
//copy all the styles from the css file, remember to get rid of the selectors
const FormControl = styled.div`
  margin: 0.5rem 0;

& label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
  // we added this when we started using props:
  color: ${props => props.invalid ? 'red' : 'black'};
}

& input {
  display: block;
  width: 100%;
  border: 1px solid ${props => (props.invalid ? 'red' : '#ccc')};
  // we added this when we started using props:
  background-color: ${props =>  (props.invalid ? '#ffd7d7' : 'transparent')};
  font: inherit;
  line-height: 1.5rem;
  padding: 0 0.25rem;
}

& input:focus {
  outline: none;
  background: #fad0ec;
  border-color: #8b005d;
}

// Now we can remove these styles now that we're using PROPS!
// &.invalid input {
//   border-color: red;
//   background-color: #ffd7d7;
// }

// &.invalid label {
//   color: red;
// }
`;

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

      {/* //////////////////// */}
      {/* This is method ONE for handling styles dynamically: */}
      {/* if isValid is false it will add the invalid class else nothing */}
      {/* <FormControl className={!isValid && 'invalid'}> */}

      {/* Method TWO: using props! */}
      <FormControl invalid={!isValid}>

      {/* <div className={`form-control ${!isValid ? 'invalid' : ''}`}> */}
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      {/* </div> */}
      </FormControl>


      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
