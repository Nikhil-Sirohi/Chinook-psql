import React, { useEffect, useState } from "react";
import { fetchAlbums } from "../services/api";
import AlbumTable from "../components/AlbumTable";
import AlbumForm from "../components/AlbumForm";
import "../styles/App.css";

const Dashboard = () => {
  const [albums, setAlbums] = useState([]);

  const loadAlbums = async () => {
    const data = await fetchAlbums();
    setAlbums(data);
  };

  useEffect(() => {
    loadAlbums();
  }, []);

  return (
    <div className="container">
      <h1>Album Dashboard</h1>
      <AlbumForm refreshAlbums={loadAlbums} />
      <AlbumTable albums={albums} />
    </div>
  );
};

export default Dashboard;
