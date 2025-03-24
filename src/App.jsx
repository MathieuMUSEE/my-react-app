import React from "react";
import UsersList from "./UsersList";

const App = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600">Hello, World!</h1>
      <UsersList />
    </div>
  );
};

export default App;