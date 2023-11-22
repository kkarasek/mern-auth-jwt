import { useState } from 'react';
import FormContainer from '../components/FormContainer/FormContainer';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const submitHandler = async (e) => {
		e.preventDefault();
		console.log('Form submitted!');
	};

	return (
		<main className="flex min-h-screen flex-col items-center p-24 gap-16">
			<FormContainer>
				<div className="">Login</div>
			</FormContainer>
		</main>
	);
};

export default Login;
