const express = require("express");
const app = express();
const port = 5001; //this is standard for local development now

app.use("/static", express.static("public"));

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
