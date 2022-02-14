//imports
require("./db/connection");
const express = require("express");
const movieRouter = require("./movies/movieRoutes");

//other globals
const app = express();
const port = process.env.PORT || 5001;

app.use(express.json());
app.use(movieRouter);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
