import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const UserDetails = ({ users, removeUser, updateUser }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const user = users.find(u => u.id === parseInt(id));

  const [name, setName] = useState(user ? user.name : '');
  const [surname, setSurname] = useState(user ? user.surname : '');
  const [phone, setPhone] = useState(user ? user.phone : '');
  const [email, setEmail] = useState(user ? user.email : '');

  const handleDelete = () => {
    removeUser(user.id);
    navigate('/');
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    updateUser(user.id, { name, surname, phone, email });
    navigate('/');
  };

  if (!user) {
    return <p>Użytkownik nie znaleziony.</p>;
  }

  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title">Szczegóły Użytkownika</h2>
        <p><strong>Imię:</strong> {user.name}</p>
        <p><strong>Nazwisko:</strong> {user.surname}</p>
        <p><strong>Numer telefonu:</strong> {user.phone}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <button onClick={handleDelete} className="btn btn-danger mb-3">Usuń</button>

        <h3>Edytuj Użytkownika</h3>
        <form onSubmit={handleUpdate}>
          <div className="form-group">
            <label>Imię:</label>
            <input 
              type="text" 
              className="form-control"
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required 
            />
          </div>
          <div className="form-group">
            <label>Nazwisko:</label>
            <input 
              type="text" 
              className="form-control"
              value={surname} 
              onChange={(e) => setSurname(e.target.value)} 
              required 
            />
          </div>
          <div className="form-group">
            <label>Numer telefonu:</label>
            <input 
              type="tel" 
              className="form-control"
              value={phone} 
              onChange={(e) => setPhone(e.target.value)} 
              required 
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input 
              type="email" 
              className="form-control"
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>
          <button type="submit" className="btn btn-primary mt-3">Zapisz zmiany</button>
        </form>
      </div>
    </div>
  );
};

export default UserDetails;
