import { FormContainerProps } from './FormContainer.types';

const FormContainer = ({ children }: FormContainerProps) => {
	return (
		<div className="bg-white bg-opacity-5 border border-gray-200 rounded-lg py-4 px-10 border-opacity-25 text-gray-200 w-6/12 h-96 flex flex-col justify-start items-center gap-3">
			{children}
		</div>
	);
	// className="border-opacity-25 text-gray-200 w-36 whitespace-nowrap h-150"
};

export default FormContainer;
