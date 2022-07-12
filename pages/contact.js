import Image from 'next/image';
import HeroBanner from '../components/utils/HeroBanner';
import Link from 'next/link';
const contact = () => {
	return (
		<section className='relative dark:bg-neutral-800'>
			<div className=' relative mx-auto  px-4 pt-20'>
				<div className='mb-20 flex flex-col text-center'>
					<span className='text-lg font-bold text-blue-400'>How Did I do?</span>
					<h2 className=' mt-10 pb-20 text-5xl font-bold dark:text-white'>
						Contact Me!
					</h2>
					<Link href='https://linktr.ee/terrancebrown'>
						<a className='text-4xl font-bold underline hover:text-purple-900 dark:text-white dark:hover:text-purple-900 '>
							Golden Link
						</a>
					</Link>
				</div>
			</div>{' '}
		</section>
	);
};

export default contact;
