import React from 'react';
import UserPosts from '../components/UserPosts';

const UserPostsPage: React.FC = () => {
  return (
    <div>
      <h1>Publicaciones del Usuario</h1>
      <UserPosts></UserPosts>
    </div>
  );
}

export default UserPostsPage;
