const express = require("express");
const app = express();
const cors = require('cors')

app.use(cors())

let fakeDB = [
  {
   "id": 1,
    "name": "khadija",
  },
  {
    "id": 2,
    "name": "murad",
  },
  {
    "id": 3,
    "name": "vusala",
  },
  {
    "id": 4,
    "name": "ayten",
  },
];

app.get("/users/:id", (req, res) => {
  const { id } = req.params;
  const element = fakeDB.find((x) => x.id === +id);
  res.send(element);
});

app.get("/users", (req, res) => {
  res.send(fakeDB);
});

app.post("/users", (req, res) => {
  fakeDB.push(req.body);
  res.send("hello world");
});

app.put("/users", (req, res) => {
  res.send("hello world");
});

app.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  fakeDB = fakeDB.find((x) => x.id !== +id);
  res.send('deleted');
});

app.listen(8080, () => {
  console.log("8080-da dinlenilir");
});
