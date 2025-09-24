# Personal Finance Tracker

A full-stack MERN application for managing personal transactions. This application allows users to track their income and expenses by adding, viewing, editing, and deleting transactions with categories and dates.

## Features

- View a list of all transactions with details (title, amount, date, category)
- Add new transactions (income or expenses)
- Edit existing transactions
- Delete transactions with confirmation
- Categorize transactions for better organization
- Responsive React frontend with routing

## Tech Stack

### Backend

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework for Node.js
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB
- **CORS** - Cross-origin resource sharing

### Frontend

- **React** - JavaScript library for building user interfaces
- **React Router DOM** - Declarative routing for React
- **Axios** - HTTP client for making API requests

## Prerequisites

- Node.js (version 14 or higher) installed on your system
- MongoDB installed and running locally, or a MongoDB Atlas connection string

## Installation

1. Clone the repository or ensure you are in the project root directory (`c:/Users/prera/Downloads/MERN`).

2. **Backend Setup:**

   - Navigate to the `backend` directory:
     ```
     cd backend
     ```
   - Install dependencies:
     ```
     npm install
     ```
   - Create a `.env` file in the `backend` directory with the following content:
     ```
     MONGODB_URI=mongodb://localhost:27017/personal-finance-tracker
     PORT=5000
     ```
     - Replace `mongodb://localhost:27017/personal-finance-tracker` with your MongoDB connection string if using MongoDB Atlas.
     - The `PORT=5000` is set to match the frontend's proxy configuration.

3. **Frontend Setup:**
   - Navigate to the `frontend` directory:
     ```
     cd ../frontend
     ```
   - Install dependencies:
     ```
     npm install
     ```

## Running the Application

1. **Start the Backend Server:**

   - From the `backend` directory:
     ```
     npm run dev
     ```
   - The backend server will start and run on `http://localhost:5000`.
   - You should see "MongoDB connected" and "Server running on port 5000" in the console.

2. **Start the Frontend Development Server:**

   - Open a new terminal and navigate to the `frontend` directory:
     ```
     cd frontend
     ```
   - Start the React development server:
     ```
     npm start
     ```
   - The frontend will run on `http://localhost:3000` and automatically proxy API requests to the backend.

3. **Access the Application:**
   - Open your web browser and navigate to `http://localhost:3000`.
   - You can now view, add, edit, and delete transactions.

## API Endpoints

The backend provides a RESTful API with the following endpoints:

- `GET /api/transactions` - Retrieve all transactions (sorted by date descending)
- `GET /api/transactions/:id` - Retrieve a single transaction by ID
- `POST /api/transactions` - Create a new transaction
  - Request body: `{ "title": "string", "amount": number, "date": "YYYY-MM-DD", "category": "string" }`
- `PUT /api/transactions/:id` - Update an existing transaction by ID
  - Request body: Same as POST, fields are optional
- `DELETE /api/transactions/:id` - Delete a transaction by ID

## Frontend Routes

- `/` - Home page displaying the list of transactions
- `/add` - Form to add a new transaction
- `/:id/edit` - Form to edit an existing transaction (where `:id` is the transaction ID)

## Project Structure

```
MERN/
├── backend/
│   ├── models/
│   │   └── Transaction.js
│   ├── routes/
│   │   └── transactions.js
│   ├── package.json
│   ├── package-lock.json
│   └── server.js
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── AddTransaction.jsx
│   │   │   ├── DeleteTransaction.jsx
│   │   │   ├── EditTransaction.jsx
│   │   │   └── TransactionList.jsx
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── index.jsx
│   ├── package.json
│   └── package-lock.json
└── README.md
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Deployment

### Deploying the Backend

You can deploy the backend to a cloud platform like Heroku or Railway.

#### Using Heroku:

1. Create a Heroku account and install the Heroku CLI.
2. Login to Heroku: `heroku login`
3. Create a new app: `heroku create your-app-name`
4. Set environment variables: `heroku config:set MONGODB_URI=your-mongodb-uri`
5. Deploy: `git push heroku main`
6. Open the app: `heroku open`

#### Using Railway:

1. Create a Railway account and install the Railway CLI.
2. Login: `railway login`
3. Create a new project: `railway init`
4. Add environment variables in the Railway dashboard.
5. Deploy: `railway up`

### Deploying the Frontend

You can deploy the frontend to Vercel or Netlify.

#### Using Vercel:

1. Create a Vercel account and install the Vercel CLI.
2. Login: `vercel login`
3. Navigate to the `frontend` directory: `cd frontend`
4. Deploy: `vercel --prod`
5. Vercel will provide a URL for your deployed app.

#### Using Netlify:

1. Create a Netlify account.
2. Install the Netlify CLI: `npm install -g netlify-cli`
3. Login: `netlify login`
4. Navigate to the `frontend` directory: `cd frontend`
5. Build the app: `npm run build`
6. Deploy: `netlify deploy --prod --dir=build`
7. Netlify will provide a URL for your deployed app.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
