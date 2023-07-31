import jwt from 'jsonwebtoken';
import expressAsyncHandler from 'express-async-handler';

import User from '../models/userModel.js';

const protect = asyncHandler(async (req, res, next) => {
	let token;

	token = req.cookie.jwt;

	if (token) {
	}
});
