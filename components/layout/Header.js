import { BsMoonStarsFill } from 'react-icons/bs';
import { FaSun } from 'react-icons/fa';
import { GiJigsawPiece } from 'react-icons/gi';
import { GiHamburgerMenu } from 'react-icons/gi';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWizardsOfTheCoast } from 'react-icons/fa';
import { useState } from 'react';
import MobileNav from '../utils/MobileNav';
import Link from 'next/link';
import Image from 'next/dist/client/image';
const Header = ({ setThemeDark, useDark }) => {
	const [showMenu, setShowMenu] = useState(false);

	return (
		<nav className='sticky top-0 z-10 flex items-center justify-around bg-red-800 p-6 text-white dark:bg-neutral-900 dark:text-white'>
			<Link href='/'>
				<a>
					<div className='flex items-center text-3xl font-semibold'>
						<Image
							src='/BGIMGs/wizardsLogo.png'
							objectFit='cover'
							objectPosition='center'
							height={100}
							width={100}
							alt='Wizards'
							layout='intrinsic'
							quality={100}
							className=''
						/>
					</div>
				</a>
			</Link>
			<button
				className='lg:hidden'
				aria-label='Toggle Menu'
				onClick={() => setShowMenu((prevState) => !prevState)}>
				<GiHamburgerMenu className='text-3xl' />
			</button>
			<div className='absolute top-0 right-0 w-1/2'>
				<AnimatePresence>
					{showMenu && (
						<MobileNav
							setShowMenu={setShowMenu}
							setThemeDark={setThemeDark}
							useDark={useDark}
						/>
					)}
				</AnimatePresence>
			</div>
			<nav className='hidden w-7/12 lg:block'>
				<ul className='flex w-full items-center justify-around text-lg font-bold'>
					<Link href='/'>
						<a>
							<li className='rounded-lg py-2 px-8 hover:cursor-pointer hover:bg-neutral-400'>
								Home
							</li>
						</a>
					</Link>

					<Link href='/stats'>
						<a>
							{' '}
							<li className='rounded-lg py-2 px-8 hover:cursor-pointer hover:bg-neutral-400'>
								Statistics
							</li>
						</a>
					</Link>

					<Link href='/contact'>
						<a>
							<li className='rounded-lg py-2 px-8 hover:cursor-pointer hover:bg-neutral-400'>
								Contact
							</li>
						</a>
					</Link>
					<li>
						{' '}
						<button
							className='text-2xl'
							aria-label='Toggle Dark Mode'
							onClick={() => setThemeDark((prevTheme) => !prevTheme)}>
							{useDark ? (
								<BsMoonStarsFill className='text-blue-700' />
							) : (
								<FaSun className='text-white' />
							)}
						</button>
					</li>
				</ul>
			</nav>
			<div className='hidden lg:block'></div>
		</nav>
	);
};

export default Header;
