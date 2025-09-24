import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const DeleteTransaction = () => {
  const [transaction, setTransaction] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchTransaction();
  }, [id]);

  const fetchTransaction = async () => {
    try {
      const response = await axios.get(`/api/transactions/${id}`);
      setTransaction(response.data);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch transaction');
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/transactions/${id}`);
      navigate('/');
    } catch (err) {
      setError('Failed to delete transaction');
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!transaction) return <div>Transaction not found</div>;

  return (
    <div className="delete-transaction">
      <h2>Delete Transaction</h2>
      <p>Are you sure you want to delete this transaction?</p>
      <div className="transaction-details">
        <p><strong>Title:</strong> {transaction.title}</p>
        <p><strong>Amount:</strong> ${Math.abs(transaction.amount).toFixed(2)}</p>
        <p><strong>Date:</strong> {new Date(transaction.date).toLocaleDateString()}</p>
        <p><strong>Category:</strong> {transaction.category}</p>
      </div>
      <div className="actions">
        <button onClick={handleDelete} className="delete-btn">Delete</button>
        <button onClick={() => navigate('/')} className="cancel-btn">Cancel</button>
      </div>
    </div>
  );
};

export default DeleteTransaction;
