import React, { useState, useRef } from "react";
import axios from "axios";

const ResponseCreate = ({ formId }) => {
  const [content, setContent] = useState("");
  const contentRef = useRef();

  const buttonClick = () => {
    setContent(contentRef.current.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault(); // preventing page reload

    await axios.post(`http://localhost:4001/forms/${formId}/responses`, {
      content,
    });

    setContent("");
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>New Response</label>
          <input ref={contentRef} className="form-control" />
          <button onClick={buttonClick} className="btn btn-primary">
            Submit Response
          </button>
        </div>
      </form>
    </>
  );
};

export default ResponseCreate;
