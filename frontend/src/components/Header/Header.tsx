import { useEffect, useState, useCallback } from 'react';
import { HamburgerMenuIcon, Cross1Icon } from '@radix-ui/react-icons';

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [prevScrollPos, setPrevScrollPos] = useState(0);
	const [visible, setVisible] = useState(true);

	const handleScroll = useCallback(() => {
		const currentScrollPos = window.scrollY;

		setVisible(
			(prevScrollPos > currentScrollPos &&
				prevScrollPos - currentScrollPos > 70) ||
				currentScrollPos < 10
		);

		setPrevScrollPos(currentScrollPos);
	}, [prevScrollPos]);

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		return () => window.removeEventListener('scroll', handleScroll);
	}, [prevScrollPos, visible, handleScroll]);

	return (
		<nav
			className={`w-full sm:flex sm:justify-between sm:items-baseline relative ${
				visible ? 'opacity-1' : 'opacity-0'
			} ease-in-out duration-700 motion-reduce:transition-none`}
		>
			<div className="flex p-6 justify-between items-center">
				<h1 className="text-3xl animate-flicker">MERN Auth</h1>
				<div className="sm:hidden">
					{isOpen ? (
						<button
							type="button"
							onClick={() => setIsOpen(false)}
							aria-label="Close Menu"
							aria-expanded="true"
							aria-controls="menu"
						>
							<Cross1Icon
								className="w-8 h-8"
								aria-hidden="true"
								focusable="false"
							/>
						</button>
					) : (
						<button
							type="button"
							onClick={() => setIsOpen(true)}
							aria-label="Open Menu"
							aria-expanded="false"
							aria-controls="menu"
						>
							<HamburgerMenuIcon
								className="w-8 h-8"
								aria-hidden="true"
								focusable="false"
							/>
						</button>
					)}
				</div>
			</div>
			<div
				id="menu"
				className={`${
					isOpen ? 'block' : 'hidden'
				}  px-6 text-xl sm:flex sm:gap-3`}
			>
				<div className="mb-3">Sing In</div>
				<div className="">Sign Up</div>
			</div>
		</nav>
	);
};

export default Header;
