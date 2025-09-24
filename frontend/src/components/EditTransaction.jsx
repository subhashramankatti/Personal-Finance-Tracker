import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const EditTransaction = () => {
  const [formData, setFormData] = useState({
    title: '',
    amount: '',
    date: '',
    category: ''
  });
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
      const transaction = response.data;
      setFormData({
        title: transaction.title,
        amount: transaction.amount.toString(),
        date: new Date(transaction.date).toISOString().split('T')[0],
        category: transaction.category
      });
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch transaction');
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/api/transactions/${id}`, {
        ...formData,
        amount: parseFloat(formData.amount)
      });
      navigate('/');
    } catch (err) {
      setError('Failed to update transaction');
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="edit-transaction">
      <h2>Edit Transaction</h2>
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Amount (use negative for expenses):</label>
          <input
            type="number"
            id="amount"
            name="amount"
            step="0.01"
            value={formData.amount}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="category">Category:</label>
          <input
            type="text"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Update Transaction</button>
        <button type="button" onClick={() => navigate('/')}>Cancel</button>
      </form>
    </div>
  );
};

export default EditTransaction;
