import React from "react";
import PropTypes from "prop-types";
import HTMLText from "../HTMLText/HTMLText";
import ArticleListItem from "../ArticleListItem/ArticleListItem.jsx";
import './ArticleList.module.css'
const ArticleList = (props) => {
    let displayContent
    if(props.content.length){
        displayContent = (
            <ul>
        {props.content.map((item) => (
            <ArticleListItem article={item} key={item.slug} />
        ))}
        </ul>
        );
    }else{
        displayContent = <div>you have no data</div>;
    }
  return (
       <div>{displayContent}</div>
       
  );
};

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired
};

export default ArticleList;
