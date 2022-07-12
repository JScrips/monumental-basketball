import React from 'react';

const Footer = () => {
	return (
		<section>
			<div className='bg-red-800 p-4 dark:bg-neutral-900'>
				<div className=' text-center'>
					<a
						className='mb-4 mr-3 inline-block w-full transform-gpu rounded  px-7 py-4 text-center font-medium text-white  duration-300 hover:scale-125 hover:transform-gpu hover:bg-blue-600 hover:duration-300 sm:w-auto'
						href='#'>
						Mobile: (323)-678 -7393
					</a>
					<a
						className='duration-250 dark:bg-neutral-800-500 inline-block w-full transform-gpu rounded px-7 py-4 text-center font-medium text-white  transition duration-300 hover:scale-125 hover:transform-gpu hover:bg-blue-600 hover:duration-300 sm:w-auto '
						href='#'>
						Email: terrancem.brown@gmail.com
					</a>
				</div>

				<div className=' items-center justify-center sm:flex'>
					<span className='block text-sm font-light text-white'>
						© 2022 JScrips. All rights reserved.
					</span>
				</div>
				<p className='mx-auto max-w-3xl pb-4 text-xs font-light text-gray-400'>
					Cookies are important to the proper functioning of a site. To improve
					your experience, we use cookies to remember log-in details and provide
					secure log-in, collect statistics to optimize site functionality, and
					deliver content tailored to your interests...
				</p>
			</div>
		</section>
	);
};

export default Footer;
