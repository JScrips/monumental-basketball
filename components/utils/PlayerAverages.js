const PlayerAverages = ({ player, averages }) => {
	const [pts, fga, pp36m, plusminus, plusminusp36] = averages;

	return (
		<div className='flex  justify-center border border-white border-opacity-25  bg-blue-700 text-white ring  ring-black ring-opacity-5 md:min-w-[100vw]'>
			<div className='flex  min-h-full flex-col border-r border-white border-opacity-20 px-4 py-2 md:px-16 md:py-10 lg:border-x'>
				<span className='font-serif text-lg'>PPG</span>

				<span className='text-3xl font-bold '>{pts}</span>
			</div>
			<div className='flex  min-h-full flex-col border-x border-white border-opacity-20 px-6 py-2 md:px-16 md:py-10'>
				<span className='font-serif text-lg'>FGA</span>

				<span className='text-3xl font-bold '>{fga}</span>
			</div>
			<div className='flex  min-h-full flex-col border-l  border-white border-opacity-20 px-6 py-2 md:px-16 md:py-10 lg:border-x'>
				<span className='font-serif text-lg'>PP36M</span>

				<span className='text-3xl font-bold '>{pp36m}</span>
			</div>
			<div className='  hidden min-h-full flex-col border-x border-white border-opacity-20 md:px-16 md:py-10 lg:flex'>
				<span className='font-serif text-lg'>Plus Minus</span>

				<span className='text-3xl font-bold '>{plusminus}</span>
			</div>
			<div className='hidden min-h-full flex-col  border-white border-opacity-20 md:px-16  md:py-10 lg:flex lg:border-x'>
				<span className='font-serif text-lg'>Plus Minus/ 36 m</span>

				<span className='text-3xl font-bold '>{plusminusp36}</span>
			</div>
			<div className='hidden min-h-full flex-col divide-y divide-neutral-400 border-x border-white border-opacity-20  lg:flex'>
				<div className='flex flex-col px-8 py-5'>
					<span className='font-serif text-lg'>Height</span>
					<span className=' text-2xl'>{player.height}</span>
				</div>

				<div className='hidden flex-col md:px-8 md:py-5 lg:flex'>
					<span className='font-serif text-lg'>Age</span>
					<span className='text-2xl'>{2022 - player.birth.year}</span>
				</div>
			</div>
			<div className='hidden min-h-full flex-col divide-y divide-neutral-400 border-x border-white border-opacity-20  lg:flex'>
				<div className='flex flex-col md:px-8 md:py-5'>
					<span className='font-serif text-lg'>Experience</span>
					<span className='text-2xl'>{player.yearsPro} yr</span>
				</div>

				<div className='hidden flex-col md:flex md:px-8 md:py-5'>
					<span className='font-serif text-lg'>Birthday</span>
					<span className='text-xl'>
						{player.birth.month} {player.birth.date}, {player.birth.year}
					</span>
				</div>
			</div>
		</div>
	);
};

export default PlayerAverages;
