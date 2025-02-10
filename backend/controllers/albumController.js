const AlbumModel = require("../models/albumModel");

exports.getAlbums = async (req, res) => {
  try {
    const albums = await AlbumModel.getAllAlbums();
    res.json(albums);
  } catch (err) {
    res.status(500).json({ error: "Server error while fetching albums" });
  }
};

exports.addAlbum = async (req, res) => {
  console.log(req.body); // Log the request body
  const { album_id, title, artist_id } = req.body;

  if (!album_id || !title || !artist_id) {
    return res
      .status(400)
      .json({ error: "album_id, title, and artist_id are required" });
  }

  try {
    const newAlbum = await AlbumModel.addAlbum(album_id, title, artist_id);
    res.status(201).json(newAlbum);
  } catch (err) {
    console.error("Error adding album:", err); // Log the error
    res.status(500).json({ error: "Error adding album" });
  }
};
