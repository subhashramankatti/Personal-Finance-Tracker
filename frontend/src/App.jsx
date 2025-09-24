import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import EditTransaction from './components/EditTransaction';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Personal Finance Tracker</h1>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<TransactionList />} />
            <Route path="/add" element={<AddTransaction />} />
            <Route path="/:id/edit" element={<EditTransaction />} />

          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
