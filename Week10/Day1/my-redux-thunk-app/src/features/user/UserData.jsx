import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from './userSlice';

const UserData = () => {
  const dispatch = useDispatch();
  
  // Corrected to match 'userData' from userSlice.js
  const { userData, loading, error } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>User Data</h1>
      <ul>
        {userData.map((user) => (
          <li key={user.id}>
            <h2>{user.name}</h2>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserData;
