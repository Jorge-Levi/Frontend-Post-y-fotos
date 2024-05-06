import React from 'react';
import UsersList from '../components/UserList';

const UserListPage: React.FC = () => {
  return (
    <div>
      <h1>Lista de Usuarios</h1>
      <UsersList />
    </div>
  );
}

export default UserListPage;
