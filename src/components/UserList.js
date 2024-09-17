import React from 'react';
import { Link } from 'react-router-dom';

const UserList = ({ users }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title">Lista Użytkowników</h2>
        {users.length === 0 ? (
          <p className="text-muted">Brak użytkowników.</p>
        ) : (
          <ul className="list-group">
            {users.map((user) => (
              <li key={user.id} className="list-group-item d-flex justify-content-between align-items-center">
                {user.name} {user.surname}
                <Link to={`/user/${user.id}`} className="btn btn-primary">Szczegóły</Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default UserList;
