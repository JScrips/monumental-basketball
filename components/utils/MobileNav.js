import { motion } from 'framer-motion';
import { BsMoonStarsFill } from 'react-icons/bs';
import { FaSun } from 'react-icons/fa';
import Link from 'next/link';

const MobileNav = ({ setShowMenu, useDark, setThemeDark }) => {
	const variants = {
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				type: 'tween',
				duration: 1,
			},
		},
		hidden: {
			opacity: 1,
			y: '-100vh',
			transition: {
				type: 'tween',
				duration: 1,
			},
		},
	};
	return (
		<motion.div
			variants={variants}
			initial='hidden'
			animate='visible'
			exit='hidden'
			className='flex min-h-screen bg-red-700 text-xl font-semibold text-white dark:bg-neutral-900'>
			<ul className='mx-auto flex flex-col items-center justify-around p-10'>
				<li>
					{' '}
					<button
						className='text-2xl text-white dark:text-blue-600'
						aria-label='Toggle Dark Mode'
						onClick={() => setThemeDark((prevTheme) => !prevTheme)}>
						{useDark ? (
							<BsMoonStarsFill className='text-blue-700' />
						) : (
							<FaSun className='' />
						)}
					</button>{' '}
				</li>
				<li>
					<Link href='/'>
						<a onClick={() => setShowMenu((prevState) => !prevState)}>Home</a>
					</Link>
				</li>

				<li>
					<Link href='/stats'>
						<a onClick={() => setShowMenu((prevState) => !prevState)}>
							Statistics
						</a>
					</Link>
				</li>

				<li>
					{' '}
					<button
						aria-label='Toggle Menu'
						onClick={() => setShowMenu((prevState) => !prevState)}
						className='rounded-2xl p-4 text-white ring ring-white'>
						{' '}
						Close Menu
					</button>
				</li>
			</ul>
		</motion.div>
	);
};

export default MobileNav;
