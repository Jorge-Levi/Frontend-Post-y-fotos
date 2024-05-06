import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UserListPage from '../../pages/UsersListPage';
import UserPostsPage from '../../pages/UserPostsPage';
import UserPhotosPage from '../../pages/UserPhotosPage';
import LogsPage from '../../pages/LogsPage';

const MainContent: React.FC = () => {
  return (
    <div className="main-content">
      <Routes>
        <Route path="/" element={<UserListPage />} />
        <Route path="/users" element={<UserListPage />} />
        <Route path="/users/:userId/posts" element={<UserPostsPage />} />
        <Route path="/users/:userId/photos" element={<UserPhotosPage />} />
        <Route path="/logs" element={<LogsPage />} />
      </Routes>
    </div>
  );
}

export default MainContent;
