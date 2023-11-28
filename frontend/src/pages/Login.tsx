import { useState } from 'react';
import FormContainer from '../components/FormContainer/FormContainer';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log('Form submitted!');
	};

	return (
		<main className="flex min-h-screen flex-col items-center p-24 gap-16">
			<FormContainer>
				<h1 className="">Login</h1>
				<form
					className="flex flex-col justify-start items-center gap-3"
					onSubmit={submitHandler}
				>
					{/* add label */}
					<input
						className="text-black"
						type="email"
						placeholder="email"
						value={email}
						onChange={(e) => {
							setEmail(e.target.value);
							console.log(e.target.value);
						}}
					/>
					{/* add label */}
					<input
						className="text-black"
						type="password"
						placeholder="password"
						value={password}
						onChange={(e) => {
							setPassword(e.target.value);
							console.log(e.target.value);
						}}
					/>
					<button
						className="bg-white bg-opacity-5 border border-gray-200 rounded-lg py-1 px-5 border-opacity-25 hover:bg-opacity-20 ease-in-out duration-150"
						type="submit"
					>
						Submit
					</button>
				</form>
			</FormContainer>
		</main>
	);
};

export default Login;
