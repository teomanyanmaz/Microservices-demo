import React, { useState, useEffect } from "react";
import axios from "axios";
import ResponseCreate from "./ResponseCreate";
import ResponseList from "./ResponseList";

const FormList = () => {
  const [forms, setForms] = useState({});

  const fetchForms = async () => {
    const res = await axios.get("http://localhost:4002/forms");
    setForms(res.data);
  };
  useEffect(() => {
    fetchForms();
  });

  const formsList = Object.values(forms).map((form) => {
    return (
      <div
        className="card"
        key={form.id}
        style={{ width: "30%", marginBottom: "1em" }}
      >
        <div className="card-body">
          <h3 className="card-title">{form.title}</h3>
          <h4 className="card-text">{form.question}</h4>
        </div>
        <hr/>
        <div className="card-body">
          <ResponseList responses={form.responses} />
          <ResponseCreate formId={form.id} />
        </div>
      </div>
    );
  });

  return (
    <div className="d-flex flex-row flex-wrap justify-content-between">
      {formsList}
    </div>
  );
};

export default FormList;
