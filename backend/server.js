import * as dotenv from 'dotenv';
import express from 'express';

import userRoutes from './routes/userRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import connectDB from './config/db.js';

dotenv.config({ path: '../.env' });

const port = process.env.PORT || 6000;

connectDB();

const app = express();

app.use('/api/users', userRoutes);

// - **POST /api/users/** - Register a user
// - **POST /api/users/auth** - Authenticate user and get token
// - **POST /api/users/logout** - Logout user and clear token
// - **GET /api/users/profile** - Get user profile
// - **POST /api/users/profile** - Update user profile

app.get('/', (req, res) => {
	res.send('Server is ready!');
});

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
	console.log(`Server running on port ${port}.`);
});
