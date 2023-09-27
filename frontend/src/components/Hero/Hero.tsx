const Hero = () => {
	return (
		<main className="flex min-h-screen flex-col items-center p-24 gap-16">
			<h1 className="hero text-4xl sm:text-5xl">MERN Authentication</h1>
			<div className="flex w-3/6 items-center justify-center gap-20 text-xl">
				<button className="bg-white bg-opacity-10 border border-gray-200 rounded-lg py-4 px-10 border-opacity-25 text-gray-200 hover:bg-opacity-20 ease-in-out duration-150">
					Sign In
				</button>
				<button className="bg-white bg-opacity-10 border border-gray-200 rounded-lg py-4 px-10 border-opacity-25 text-gray-200 hover:bg-opacity-20 ease-in-out duration-150">
					Sign Up
				</button>
			</div>
			{/* <div className="max-w-xxl p-6 bg-white border border-gray-200 rounded-lg shadow bg-opacity-10"></div> */}
		</main>
	);
};

export default Hero;
