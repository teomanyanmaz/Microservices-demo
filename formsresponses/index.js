const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const forms = {};

app.get("/forms", (req,res) => {
    res.send(forms);
});

app.post("/events", (req,res) => {
    const {type, data } = req.body;

    if (type === "FormCreated") {
        const {id,title,question} = data;

        forms[id] = {id,title,question, responses: []};

    }

    if(type === "ResponseCreated") {
        const {id, content, formId} = data;

        const form = forms[formId];
        form.responses.push({id,content});
    }

    console.log(forms);

    res.send({});
});

app.listen(4002, () => {
    console.log("Listening on 4002");
});