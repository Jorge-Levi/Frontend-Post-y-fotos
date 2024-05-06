import React from 'react';
import LogsList from '../components/LogsList';

const UserPostsPage: React.FC = () => {
  return (
    <div>
      <h1>Logs guardados</h1>
      <LogsList></LogsList>
    </div>
  );
}

export default UserPostsPage;
