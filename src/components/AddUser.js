import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddUser = ({ addUser }) => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser({ name, surname, phone, email });
    navigate('/');
  };

  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title">Dodaj Użytkownika</h2>
        <form onSubmit={handleSubmit}>
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
          <button type="submit" className="btn btn-primary mt-3">Dodaj</button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
