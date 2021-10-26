import React from "react";

const ResponseList = ({ responses }) => {
  
  const responseList = responses.map((response) => {
    return <li key={response.id}>{response.content}</li>;
  });

  return <ul>{responseList}</ul>;
};

export default ResponseList;
