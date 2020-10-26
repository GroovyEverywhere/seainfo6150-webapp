import React, { useState }from "react";
import HTMLText from "../HTMLText/HTMLText";
import PropTypes from "prop-types";
import ArticleTextToggleButton from "../ArticleTextToggleButton/ArticleTextToggleButton.jsx";
import './ArticleListItem.module.css';

const ArticleListItem = (props) => {
    var buttonText;
    let displayContent;
    const [buttonState, setButton] = useState(false);
    if(!buttonState){
      displayContent = (<div>
      <h1 style = {{color:"red"}}>{props.article.title}</h1>
      
      </div>
      );
      buttonText = "show more";
    }else{
      displayContent = (
        <div>
      <h1 style = {{color:"red"}}>{props.article.title}</h1>

      <section>{props.article.shortText}</section>
      <b>
        <time datetime = {props.article.timeStamp}> {props.article.displayDate}</time>
        </b>
        </div>
        );
        buttonText = "show less";
      
    }
  return (
    <li class = "Item">
      {displayContent}<br/>
        <ArticleTextToggleButton onClick = {() => setButton(!buttonState)} buttonText = {buttonText}/>
      </li>
  );
};
ArticleListItem.propTypes = {
  articles: PropTypes.array.isRequired
};

export default ArticleListItem;
