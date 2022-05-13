const router = require("express").Router();
const artistController = require("../controllers/artist.controller");

router.get("/artists", artistController.findAllArtists);

module.exports = router;
