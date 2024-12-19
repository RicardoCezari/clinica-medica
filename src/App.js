// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider } from './components/AuthContext'; // Ajuste o caminho
import Login from './components/Login'; // Ajuste o caminho
import Dashboard from './components/Dashboard'; // Ajuste o caminho
import PrivateRoute from './components/PrivateRoute'; // Ajuste o caminho

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<PrivateRoute component={Dashboard} />} />
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
