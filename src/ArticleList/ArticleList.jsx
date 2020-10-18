import React from "react";
import HTMLText from "../HTMLText/HTMLText";
import ArticleListItem from "../ArticleListItem/ArticleListItem.jsx";
const ArticleList = (props) => {
    let displayContent
    if(props.content.length){
        displayContent = (
            <ul>
        {props.content.map((item) => (
            <li key = {item.slug}>
                <ArticleListItem article = {item}/>
            </li>
        ))}
        </ul>
        );
    }else{
        displayContent = <div>you have no data</div>;
    }
  return (
       <article>{displayContent}</article>
       
  );
};

ArticleList.propTypes = {
};

export default ArticleList;
