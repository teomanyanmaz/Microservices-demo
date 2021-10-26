const express = require("express");
const { randomBytes } = require("crypto");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors());

const responsesByFormId = {};

app.get("/forms/:id/responses", (req, res) => {
  res.send(responsesByFormId[req.params.id] || []);
});

app.post("/forms/:id/responses", async(req, res) => {
  const repsonseId = randomBytes(4).toString("hex");
  const { content } = req.body;

  const responses = responsesByFormId[req.params.id] || [];


  responses.push({ id: repsonseId, content });
  console.log(responses);

  responsesByFormId[req.params.id] = responses;
  console.log(responsesByFormId);

  await axios.post("http://localhost:4005/events", {
    type: "ResponseCreated",
    data: {
      id: repsonseId,
      content,
      formId: req.params.id
    }
  });


  res.status(201).send(responses);
});

// app.post("/events", (req,res) => {
//   console.log("Received response event", req.body.type);

//   res.send({});
// });

app.listen(4001, () => {
  console.log("Listening on 4001");
});
