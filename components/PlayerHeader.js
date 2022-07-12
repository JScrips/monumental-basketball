import Image from 'next/image';
const PlayerHeader = ({ player }) => {
	return (
		<div className='relative  h-48  min-w-[100vw] bg-blue-700 text-white md:h-[22vh] md:max-h-[22vh]'>
			<div className='relative h-48 md:ml-96 md:min-h-[22vh] md:max-w-[30vw]'>
				<Image
					src='/BGIMGs/wizardsLogo.png'
					objectFit='cover'
					objectPosition='center'
					alt='Intensity'
					layout='fill'
					quality={100}
					className=' opacity-20 brightness-50 filter'
				/>
			</div>

			<main className='z-1 absolute inset-0 top-8 text-3xl text-white'>
				<div className='flex justify-around'></div>
			</main>
			<div className='z-1 absolute inset-x-0 bottom-0 md:right-60'>
				<div className='flex justify-center'>
					<Image
						src={player.photo}
						objectFit=''
						objectPosition='center'
						alt='Intensity'
						height={190}
						width={260}
						layout='intrinsic'
						quality={100}
						className=' '
					/>

					<div className='inset-0 left-60 flex flex-col text-3xl font-bold md:text-5xl'>
						<span className='text-sm '>Washington Wizards</span>
						<span>{player.name.first}</span>
						<span>{player.name.last}</span>{' '}
						<div className=''>
							<Image
								src='/BGIMGs/wizardsLogo.png'
								objectFit=''
								objectPosition='center'
								alt='Intensity'
								width={70}
								height={70}
								layout='intrinsic'
								quality={100}
								className=' filter'
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PlayerHeader;
