import express from 'express';
import {
	authUser,
	registerUser,
	getUserProfile,
	updateUserProfile,
	logoutUser,
} from '../controlers/userControler.js';

const router = express.Router();

router.post('/', registerUser);
router.post('/auth', authUser);
router.post('/logout', logoutUser);
router.route('/profile').get(getUserProfile).put(updateUserProfile);

export default router;
