import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AddUser from './components/AddUser';
import UserList from './components/UserList';
import UserDetails from './components/UserDetails';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [users, setUsers] = useState(() => {
    const savedUsers = localStorage.getItem('users');
    return savedUsers ? JSON.parse(savedUsers) : [];
  });

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  const addUser = (user) => {
    setUsers([...users, { ...user, id: users.length }]);
  };

  const removeUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  const updateUser = (id, updatedUser) => {
    setUsers(users.map(user => (user.id === id ? { ...user, ...updatedUser } : user)));
  };

  return (
    <Router>
      <div className="container mt-4">
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Lista Użytkowników</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/add">Dodaj Użytkownika</Link>
              </li>
            </ul>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<UserList users={users} />} />
          <Route path="/add" element={<AddUser addUser={addUser} />} />
          <Route path="/user/:id" element={<UserDetails users={users} removeUser={removeUser} updateUser={updateUser} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
