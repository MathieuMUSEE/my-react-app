import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import UsersList from './UsersList';
import CreateUserForm from './createUserForm';

const App = () => {
    return (
        <Router>
            <div className="flex flex-col items-center justify-center gap-4 h-screen bg-gray-100">
                <h1 className="text-4xl font-bold text-blue-600">Hello, World!</h1>
                <div className="flex gap-4">
                    <Link to="/users" className="text-blue-500 hover:underline">Liste des utilisateurs</Link>
                    <Link to="/create-user" className="text-green-500 hover:underline">Créer un utilisateur</Link>
                </div>

                <Routes>
                    <Route path="/users" element={<UsersList />} />
                    <Route path="/create-user" element={<CreateUserForm />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
