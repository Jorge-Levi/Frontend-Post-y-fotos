// src/components/UsersList.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { User } from '../types';
import './UsersList.css';
import { useNavigate } from 'react-router-dom';
import { logApiRequest } from '../utils/logApiRequest';

const UsersList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers(response.data);
        setIsLoading(false);
        // Registra el log del uso de la API
        logApiRequest("https://jsonplaceholder.typicode.com/users");
      } catch (error) {
        console.error('Error fetching users:', error);
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleViewPosts = (userId: number) => {
    navigate(`/users/${userId}/posts`);
  };

  const handleViewPhotos = (userId: number) => {
    navigate(`/users/${userId}/photos`);
  };

  if (isLoading) {
    return <div>Loading users...</div>;
  }

  return (
    <div className="user-list">
      {users.map(user => (
        <div className="user-card" key={user.id}>
          <h2>{user.name} ({user.username})</h2>
          <p className="email">Email: {user.email}</p>
          <p className="address">Address: {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</p>
          <p className="coords">Coordinates: {user.address.geo.lat}, {user.address.geo.lng}</p>
          <button onClick={() => handleViewPosts(user.id)}>Ver Publicaciones</button>
          <button onClick={() => handleViewPhotos(user.id)}>Ver Fotos</button>
        </div>
      ))}
    </div>
  );
};

export default UsersList;
