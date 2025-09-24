# Personal Finance Tracker

A full-stack web application to track personal income and expenses. Built with React for the frontend and Node.js/Express for the backend, using MongoDB for data storage.

## Features

- **Add Transactions**: Record new income or expense transactions with details like title, amount, date, and category.
- **View Transactions**: Display a list of all transactions with filtering and sorting options.
- **Edit Transactions**: Update existing transaction details.
- **Delete Transactions**: Remove unwanted transactions.
- **Categorization**: Organize transactions by categories (e.g., Food, Transportation, Salary).
- **Responsive Design**: Works on desktop and mobile devices.

## Tech Stack

- **Frontend**: React, React Router, Axios
- **Backend**: Node.js, Express.js, MongoDB, Mongoose
- **Other**: CORS for cross-origin requests, dotenv for environment variables

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local installation or cloud service like MongoDB Atlas)
- Git

## Installation and Setup

### Backend Setup

1. Navigate to the backend directory:

   ```
   cd backend
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Create a `.env` file in the backend directory with the following content:

   ```
   PORT=5001
   MONGODB_URI=mongodb://localhost:27017/personal-finance-tracker
   ```

   Replace `MONGODB_URI` with your MongoDB connection string if using a cloud service.

4. Start the backend server:
   ```
   npm start
   ```
   The server will run on http://localhost:5001.

### Frontend Setup

1. Navigate to the frontend directory:

   ```
   cd frontend
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```
   The application will open in your browser at http://localhost:3000.

## Usage

1. Open the application in your browser.
2. View the list of transactions on the home page.
3. Click "Add New Transaction" to create a new entry.
4. Use the "Edit" and "Delete" buttons to manage existing transactions.
5. Transactions are color-coded: green for income, red for expenses.

## API Endpoints

The backend provides the following RESTful API endpoints:

- **GET /api/transactions**: Retrieve all transactions.
- **POST /api/transactions**: Create a new transaction.
- **GET /api/transactions/:id**: Retrieve a specific transaction by ID.
- **PUT /api/transactions/:id**: Update a transaction by ID.
- **DELETE /api/transactions/:id**: Delete a transaction by ID.

## Project Structure

```
Finance-Tracker-main/
├── backend/
│   ├── models/
│   │   └── Transaction.js
│   ├── routes/
│   │   └── transactions.js
│   ├── server.js
│   ├── package.json
│   └── package-lock.json
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── AddTransaction.jsx
│   │   │   ├── EditTransaction.jsx
│   │   │   └── TransactionList.jsx
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.jsx
│   │   └── index.css
│   ├── package.json
│   └── package-lock.json
├── README.md
└── .env
```

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
