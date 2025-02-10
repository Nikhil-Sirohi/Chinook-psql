const pool = require("../config/db");

const getAllAlbums = async () => {
  try {
    const result = await pool.query("SELECT * FROM album ORDER BY album_id");
    return result.rows;
  } catch (error) {
    console.error("Error fetching albums:", error);
    throw error; // Rethrow the error to be caught in the controller
  }
};

const addAlbum = async (album_id, title, artist_id) => {
  try {
    const result = await pool.query(
      "INSERT INTO album (album_id, title, artist_id) VALUES ($1, $2, $3) RETURNING *",
      [album_id, title, artist_id]
    );
    return result.rows[0];
  } catch (error) {
    console.error("Error adding album:", error);
    throw error; // Rethrow the error to be caught in the controller
  }
};

module.exports = { getAllAlbums, addAlbum };
