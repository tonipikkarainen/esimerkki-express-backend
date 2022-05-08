require('dotenv').config();
const cors = require("cors");
const express = require("express");

const app = express();
const port = process.env.PORT || 3002;
let count = 0;

function checkNumber(input) {
  let number = parseInt(input);
  let rightAnswer = Math.floor(Math.random() * 10);
  const answer = number === rightAnswer ? "Oikein - hienoa!" : "Väärin - oikea numero oli " + rightAnswer;
  return answer;
}

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World! ...');
});

app.get('/api/:id', (req, res) => {
    console.log(req.params);
    console.log("here")
    const { id } = req.params;
    const answer = checkNumber(id);

    res.send({
        resp: "ok",
        message: answer
    });
    count++;
  });

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});