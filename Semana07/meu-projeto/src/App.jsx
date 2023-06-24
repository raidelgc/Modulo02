import React, { useState } from 'react';
import Header from './Header';
import Form from './Form';
import UserCard from './UserCard';
import SearchUser from './SearchUser';

function App() {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  return (
    <>
      <Header />
      <Form addUser={addUser} />
      <UserCard users={users} setUsers={setUsers} />
      {users.length > 0 && <SearchUser users={users} />}
    </>
  );
}

export default App;
