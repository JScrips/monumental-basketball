import { BsMoonStarsFill } from 'react-icons/bs';
import { FaSun } from 'react-icons/fa';

const DarkModeButton = ({ setThemeDark, useDark }) => {
	return (
		<button
			className='text-2xl'
			aria-label='Toggle Dark Mode'
			onClick={() => setThemeDark((prevTheme) => !prevTheme)}>
			{useDark ? (
				<BsMoonStarsFill className='text-blue-700' />
			) : (
				<FaSun className='text-orange-600' />
			)}
		</button>
	);
};

export default DarkModeButton;
