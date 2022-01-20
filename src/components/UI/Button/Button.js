// import React from 'react'; //We dont need it anymore bc we're not returing JSX here
import styled from "styled-components";

// import './Button.css'; // No need anymore

// This Button component was only created to make styling for button components
// This is called a Tagged Template Literal; This is a DEFAULT JS feature not specific to the styled package or react
// .button (also other html elements) is method the the styled obj
// here there's not need for classes so we tweaked the css code we coppied, remove selectors, and for psuedo-selectors add &
// NOTES ON PROPS! the button returned will by default applies all the props we are passing!
const Button = styled.button`
  font: inherit;
  padding: 0.5rem 1.5rem;
  border: 1px solid #8b005d;
  color: white;
  background: #8b005d;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:hover,
  &:active {
    background: #ac0e77;
    border-color: #ac0e77;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
  }
`;

// const Button = props => {
//   return (
//     <button type={props.type} className="button" onClick={props.onClick}>
//       {props.children}
//     </button>
//   );
// };

export default Button;
