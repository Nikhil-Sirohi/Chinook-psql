import React, { useState } from "react";
import { addAlbum } from "../services/api";
import "../styles/App.css";

const AlbumForm = ({ refreshAlbums }) => {
  const [albumId, setAlbumId] = useState("");
  const [title, setTitle] = useState("");
  const [artistId, setArtistId] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!albumId || !title || !artistId) {
      alert("Please enter all fields");
      return;
    }

    const newAlbum = {
      album_id: parseInt(albumId),
      title,
      artist_id: parseInt(artistId),
    };
    console.log("New Album Data:", newAlbum);
    const response = await addAlbum(newAlbum);
    if (response) {
      refreshAlbums(); // Refresh album list after adding
      setAlbumId("");
      setTitle("");
      setArtistId("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add New Album</h3>
      <input
        type="number"
        placeholder="Album ID"
        value={albumId}
        onChange={(e) => setAlbumId(e.target.value)}
      />
      <input
        type="text"
        placeholder="Album Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Artist ID"
        value={artistId}
        onChange={(e) => setArtistId(e.target.value)}
      />
      <button type="submit">Add Album</button>
    </form>
  );
};

export default AlbumForm;
