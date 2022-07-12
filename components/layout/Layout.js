import Header from './Header';
import Footer from './Footer';
import { useState } from 'react';

const Layout = ({ children }) => {
	const [themeDark, setThemeDark] = useState(true);
	const useDark = themeDark ? 'dark' : '';
	return (
		<div className={`${useDark} dark:text-white`}>
			<Header setThemeDark={setThemeDark} useDark={useDark} />
			<main className=' min-h-screen dark:bg-neutral-800'>{children}</main>
			<Footer />
		</div>
	);
};

export default Layout;
