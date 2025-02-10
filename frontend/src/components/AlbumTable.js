import React from "react";
import "../styles/App.css";

const AlbumTable = ({ albums }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Album ID</th>
          <th>Title</th>
          <th>Artist ID</th>
        </tr>
      </thead>
      <tbody>
        {albums.length > 0 ? (
          albums.map((album) => (
            <tr key={album.album_id}>
              <td>{album.album_id}</td>
              <td>{album.title}</td>
              <td>{album.artist_id}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="3">No albums found</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default AlbumTable;
