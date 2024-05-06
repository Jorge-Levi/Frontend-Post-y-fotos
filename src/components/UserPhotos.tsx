import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './UserPhotos.css'; // Asegúrate de importar tu archivo CSS aquí
import { logApiRequest } from '../utils/logApiRequest';

interface Album {
  userId: number;
  id: number;
  title: string;
}

interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

const UserPhotos = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const params = useParams<{ userId: string }>();
  const userId = params.userId ? parseInt(params.userId) : null;

  useEffect(() => {
    if (userId === null) return;

    const fetchPhotos = async () => {
      try {
        const { data: albums } = await axios.get<Album[]>('https://jsonplaceholder.typicode.com/albums');
        const userAlbums = albums.filter(album => album.userId === userId);
        logApiRequest("https://jsonplaceholder.typicode.com/albums");
        const { data: allPhotos } = await axios.get<Photo[]>('https://jsonplaceholder.typicode.com/photos');
        logApiRequest("https://jsonplaceholder.typicode.com/photos");
        const userPhotos = allPhotos.filter(photo =>
          userAlbums.some(album => album.id === photo.albumId)
        );

        setPhotos(userPhotos);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchPhotos();
  }, [userId]);

  return (
    <div className="user-photos-container">
      {photos.map(photo => (
        <div key={photo.id} className="photo-item">
          <img src={photo.thumbnailUrl} alt={photo.title} />
          <p>{photo.title}</p>
        </div>
      ))}
    </div>
  );
};

export default UserPhotos;
