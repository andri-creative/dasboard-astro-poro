import axios from "axios";
import type { AlbumItem, AlbumResponse } from "../types/album";

const api_url = import.meta.env.PUBLIC_API_URL;

type AlbumService = {
  getAlbums: () => Promise<AlbumItem[]>;
  createAlbum: (data: FormData) => Promise<AlbumItem>;
  deleteAlbum: (id: string) => Promise<void>;
};

const albumService = (): AlbumService => {
  const getAlbums = async () => {
    const response = await axios.get(`${api_url}/api/album`);
    return response.data;
  };

  const createAlbum = async (data: any) => {
    try {
      const response = await axios.post(`${api_url}/api/album`, data);
      return response.data;
    } catch (error) {
      console.error("Error creating album:", error);
      throw error;
    }
  };

  const deleteAlbum = async (id: string) => {
    try {
      const response = await axios.delete(`${api_url}/api/album/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error deleting album:", error);
      throw error;
    }
  };

  return {
    getAlbums,
    createAlbum,
    deleteAlbum,
  };
};

export default albumService;
