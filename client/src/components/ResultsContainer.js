import React from "react";

const ResultsContainer = ({ props }) => {
  let array = props;

  return (
    array.map(x => {
      return (<div>
        <p>Category: {x.cateogry}</p>
        <p>Question: {x.question}</p>
        <p>Answer: {x.answer}</p>
      </div>)
    })
  )
}

export default ResultsContainer;