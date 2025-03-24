import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UsersList from './UsersList';

const App = () => {
  return (
    <Router>
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <h1 className="text-4xl font-bold text-blue-600">Hello, World!</h1>
        <Routes>
          <Route path="/users" element={<UsersList />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
