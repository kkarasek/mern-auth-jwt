import * as dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config({ path: '../../.env' });

const connectDB = async () => {
	console.log(process.env.MONGO_URI);

	try {
		const connection = await mongoose.connect(process.env.MONGO_URI);
		console.log(`MongoDB connected: ${connection.connection.host}`);
	} catch (err) {
		console.error(`Error: ${err.message}`);
		process.exit(1);
	}
};

export default connectDB;
