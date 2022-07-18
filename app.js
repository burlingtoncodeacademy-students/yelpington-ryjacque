const express = require("express");
const app = express();
const cors = require("cors");
PORT = process.env.PORT || 5000;
let jsonPath = require(__dirname + "/api/data.json");
app.use(cors());
//all data to HOME
app.get("/api", (req, res) => {
  let jsonPath = require(__dirname + "/api/data.json");
  res.send(jsonPath);
});
//loop to send each restaurant's data to the correct path
for (let i of jsonPath) {
  app.get(`/${i.id}`, (req, res) => {
    res.send(i);
  });
}
app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
