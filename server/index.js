require('dotenv').config();
const cors = require("cors");
const express = require("express");

const app = express();
const port = process.env.PORT || 3002;
let count = 0;

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World! ...');
});

app.get('/api/:id', (req, res) => {
    console.log(req.params);
    console.log("here")
    const { id } = req.params;

    res.send({
        resp: "ok",
        message: "Hello you id: " + id + " number " + count
    });
    count++;
  });

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});