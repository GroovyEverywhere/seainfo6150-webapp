import React from "react";
import PropTypes from "prop-types";
import './ArticleTextToggleButton.module.css'

const ArticleTextToggleButton = ({buttonText, onClick}) => {
  return (
   <button onClick = {onClick}>
       {buttonText}
   </button>
  );
};
ArticleTextToggleButton.propTypes = {
};

export default ArticleTextToggleButton;