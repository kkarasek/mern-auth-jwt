import asyncHandler from 'express-async-handler';

// @desc    Auth user /set token
// route    POST /api/users/auth
// @access  Public

export const authUser = asyncHandler(async (req, res) => {
	res.status(200).json({ message: 'User authentication done!!!' });
});

// @desc    Register a new user
// route    POST /api/users
// @access  Public

export const registerUser = asyncHandler(async (req, res) => {
	res.status(200).json({ message: 'User registered!!!!' });
});

// @desc    Logout user
// route    POST /api/users/logout
// @access  Public

export const logoutUser = asyncHandler(async (req, res) => {
	res.status(200).json({ message: 'User logged out' });
});

// @desc    Get user profile
// route    GET /api/users/profile
// @access  Private (token needed)

export const getUserProfile = asyncHandler(async (req, res) => {
	res.status(200).json({ message: 'Here you can access the user profile' });
});

// @desc    Update user profile
// route    PUT /api/users/profile
// @access  Private (token needed)

export const updateUserProfile = asyncHandler(async (req, res) => {
	res.status(200).json({ message: 'Update user profile' });
});
