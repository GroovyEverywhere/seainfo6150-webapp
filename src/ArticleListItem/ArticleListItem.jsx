import React from "react";
import HTMLText from "../HTMLText/HTMLText";

const ArticleListItem = (props) => {
  return (
    <header>
      {/* this is an example of how you insert props into a react component */}
      <h1>{props.article.title}</h1>
      
      <time datetime = {props.article.timeStamp}> {props.article.displayDate}</time>

      <HTMLText text={props.article.shortText} />
    </header>
  );
};
ArticleListItem.propTypes = {
};

export default ArticleListItem;
