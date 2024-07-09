import React from "react";
import ActiveForm from "./ActiveForm";
import Thanks from "./Thanks";
const Form = (props) => {
  const { formSubmitted, handleFormSubmitted } = props;
  return formSubmitted ? (
    <Thanks />
  ) : (
    <ActiveForm handleFormSubmitted={handleFormSubmitted} />
  );
};

export default Form;
