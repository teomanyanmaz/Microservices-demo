const express = require("express");
const { randomBytes } = require("crypto");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors());

const forms = {};

app.get("/forms", (req, res) => {
  res.send(forms);
});

app.post("/forms", async(req, res) => {
  const id = randomBytes(4).toString("hex");
  const { title, question } = req.body;

  forms[id] = {
    id,
    title,
    question,
  };

  await axios.post("http://localhost:4005/events", {
    type: "FormCreated",
    data: {
      id,
      title,
      question
    }
  });

  res.status(201).send(forms[id]);
});

// app.post("/events", (req,res) => {
//   console.log("Received form event", req.body.type);

//   res.send({});
// });

app.listen(4000, () => {
  console.log("Listening on 4000");
});
