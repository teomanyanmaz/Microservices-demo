import React, { useState, useRef } from "react";
import axios from 'axios';

const FormCreate = () => {
  const [title, setTitle] = useState("");
  const [question, setQuestion] = useState("");
  const titleRef = useRef();
  const questionRef = useRef();

  const buttonClick = () => {
    setTitle(titleRef.current.value);
    setQuestion(questionRef.current.value);
  };

  const onSubmit = async(e) => {
    e.preventDefault(); // preventing page reload

    await axios.post("http://localhost:4000/forms", {
        title,
        question
    });

    setTitle("");
    setQuestion("");

  }


  return (
    <>
      <form onSubmit={onSubmit} >
        <div className="form-group">
          <label>Title</label>
          <input ref={titleRef} className="form-control" />
          <label>Question</label>
          <input ref={questionRef} className="form-control" />
          <button onClick={buttonClick} className="btn btn-primary">Create Form</button>
        </div>
      </form>
    </>
  );
};

export default FormCreate;
