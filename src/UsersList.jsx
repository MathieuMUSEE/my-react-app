import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://workout-planner-service:3000/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des utilisateurs :', error);
      });
  }, []);

  return (
    <div>
      <h2>Liste des Utilisateurs</h2>
      {users.length === 0 ? (
        <p>Aucun utilisateur retourné</p>
      ) : (
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.nom} {user.prenom}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default UsersList;
