import React from 'react';

const Footer = () => {
	return (
		<section>
			<div className='bg-red-800 pt-10 pb-16 dark:bg-neutral-900'>
				<div className='container mx-auto px-4'>
					<div className='flex flex-wrap items-start justify-center xl:items-center'>
						<div className='flex w-1/2 flex-wrap items-center justify-center xl:-mb-6 xl:w-auto'>
							<a
								className='mb-6 mr-14 inline-block w-full text-sm text-white hover:text-gray-200 lg:w-auto'
								href='#'>
								Stats
							</a>
							<a
								className='mb-6 mr-14 inline-block w-full text-sm text-white hover:text-gray-200 lg:w-auto'
								href='#'>
								About
							</a>
							<a
								className='mb-6 mr-14 inline-block w-full text-sm text-white hover:text-gray-200 lg:w-auto'
								href='#'>
								Stats
							</a>
							<div className='mb-6 w-full md:mr-64 lg:w-auto'>
								<a
									className='relative inline-block w-full text-sm text-white hover:text-gray-200 sm:w-auto'
									href='#'>
									<span>Careers</span>
								</a>
							</div>
						</div>
						<div className='-mb-6 flex w-1/2 flex-wrap items-center justify-center xl:w-auto'>
							<a
								className='mb-6 mr-14 inline-block w-full text-sm text-white hover:text-gray-200 lg:w-auto'
								href='#'>
								Stats
							</a>
							<a
								className='mb-6 mr-14 inline-block w-full text-sm text-white hover:text-gray-200 lg:w-auto'
								href='#'>
								Careers
							</a>
							<a
								className='mb-6 inline-block w-full text-sm text-white hover:text-gray-200 lg:w-auto'
								href='#'>
								More Stats (not really)
							</a>
						</div>
					</div>
					<h2 className='font-heading mt-20 mb-8 text-center text-4xl text-white'>
						Get in touch!
					</h2>
					<div className='mb-16 text-center'>
						<a
							className='mb-4 mr-3 inline-block w-full rounded border border-gray-700 px-7 py-4 text-center font-medium text-white hover:border-gray-600 sm:mb-0 sm:w-auto'
							href='#'>
							(323)-678 -7393
						</a>
						<a
							className='duration-250 inline-block w-full rounded bg-indigo-500 px-7 py-4 text-center font-medium text-white transition hover:bg-indigo-600 sm:w-auto'
							href='#'>
							terrancem.brown@gmail.com
						</a>
					</div>
				</div>
			</div>
			<div className='bg-red-900 py-12 text-center dark:bg-neutral-800'>
				<div className='container mx-auto px-4'>
					<div className='mb-5 items-center justify-center sm:flex'>
						<span className='block text-sm font-light text-white'>
							© 2022 JScrips. All rights reserved.
						</span>
					</div>
					<p className='mx-auto max-w-3xl text-xs font-light text-gray-400'>
						Cookies are important to the proper functioning of a site. To
						improve your experience, we use cookies to remember log-in details
						and provide secure log-in, collect statistics to optimize site
						functionality, and deliver content tailored to your interests...
					</p>
				</div>
			</div>
		</section>
	);
};

export default Footer;
