const express = require("express");
const PORT = 3000;
const db = require("./models");
const cors = require("cors");
const movieRouter = require("./routes/movie.routes");
const genreRouter = require("./routes/genre.routes");
const artistRouter = require("./routes/artist.routes");

const app = express();

const corsOptions = {
  origin: "http://localhost:3001",
};
app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to Upgrad Movie booking application development.",
  });
});

db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

app.use("/api", movieRouter, genreRouter, artistRouter);

app.listen(PORT, () => {
  console.log("listening to port number " + PORT);
});
