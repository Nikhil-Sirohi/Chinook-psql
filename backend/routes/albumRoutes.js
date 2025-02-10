const express = require("express");
const { getAlbums, addAlbum } = require("../controllers/albumController");

const router = express.Router();

router.get("/", getAlbums);
router.post("/", addAlbum);

module.exports = router;
