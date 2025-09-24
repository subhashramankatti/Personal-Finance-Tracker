import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const TransactionList = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    try {
      const response = await axios.get('/api/transactions');
      setTransactions(response.data);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch transactions');
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this transaction?')) {
      try {
        await axios.delete(`/api/transactions/${id}`);
        setTransactions(transactions.filter(transaction => transaction._id !== id));
      } catch (err) {
        setError('Failed to delete transaction');
      }
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="transaction-list">
      <h2>Transactions</h2>
      <Link to="/add" className="add-button">Add New Transaction</Link>
      {transactions.length === 0 ? (
        <p>No transactions found.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Category</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map(transaction => (
              <tr key={transaction._id}>
                <td>{transaction.title}</td>
                <td className={transaction.amount >= 0 ? 'positive' : 'negative'}>
                  ${Math.abs(transaction.amount).toFixed(2)}
                </td>
                <td>{new Date(transaction.date).toLocaleDateString()}</td>
                <td>{transaction.category}</td>
                <td>
                  <Link to={`/${transaction._id}/edit`} className="edit-btn">Edit</Link>
                  <button onClick={() => handleDelete(transaction._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TransactionList;
