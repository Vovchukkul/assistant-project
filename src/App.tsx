import React from 'react';
import './App.scss';
import {
  HashRouter as Router, Routes, Route,
} from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import { Login } from './pages/Login/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='login' element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
