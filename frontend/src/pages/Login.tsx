import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import FormContainer from '../components/FormContainer/FormContainer';
import { useLoginMutation } from '../redux/usersAPISlice';
import { useAppSelector } from '../redux/store';
import { setCredentials } from '../redux/authSlice';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [login, { isLoading }] = useLoginMutation();

	const { userInfo } = useAppSelector((state) => state.auth);

	useEffect(() => {
		if (userInfo) {
			navigate('/');
		}
	}, [navigate, userInfo]);

	const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// important
		try {
			const res = await login({ email, password }).unwrap();
			dispatch(setCredentials({ ...res }));
			navigate('/');
		} catch (err) {
			console.log(err);
		}
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
