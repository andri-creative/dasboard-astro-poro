export type AlbumItem = {
  id: number;
  url: string;
  title: string;
  createdAt?: string;
  updatedAt?: string;
};

export type AlbumResponse = {
  success: boolean;
  data: AlbumItem[];
  message?: string;
};
