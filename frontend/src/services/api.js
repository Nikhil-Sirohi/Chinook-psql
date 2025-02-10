import axios from "axios";

const API_URL = "http://localhost:5000/api/albums";

// Get all albums
export const fetchAlbums = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching albums:", error);
    return [];
  }
};

// Add a new album
export const addAlbum = async (album) => {
  try {
    const response = await axios.post(API_URL, album);
    return response.data;
  } catch (error) {
    console.error("Error adding album:", error);
    return null;
  }
};
