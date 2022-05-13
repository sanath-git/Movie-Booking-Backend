const genre = require("../models").genre;

exports.findAllGenres = (req, res) => {
  genre
    .find({})
    .then((data) => res.send(data))
    .catch((e) => res.send({ message: "Couldnt find the movies" + e }));
};
