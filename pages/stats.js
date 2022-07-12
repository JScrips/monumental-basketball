import { players } from '../components/data/players';
import { boxScores } from '../components/data/boxScores';
import Image from 'next/dist/client/image';
import { useState } from 'react';
import HeroBanner from '../components/utils/HeroBanner';
import { BsFillTelephoneFill } from 'react-icons/bs';
import Link from 'next/link';
const Stats = () => {
	const [selectedDate, setSelectedDate] = useState('');

	const dateOfGames = Object.keys(boxScores); // array -- index match statOfGames
	const statOfGames = Object.values(boxScores); // array -- index match dateOfGames
	const showInfo =
		selectedDate !== '' ? statOfGames[dateOfGames.indexOf(selectedDate)] : [];
	console.log(showInfo);

	return (
		<div className=' dark:text-white '>
			<HeroBanner>
				<div className='flex min-h-full flex-col items-center justify-center'>
					<h2 className='text-center text-6xl font-semibold md:text-7xl lg:text-9xl'>
						{' '}
						Statistics
					</h2>
					<p className='mt-8 w-8/12 text-center font-serif text-sm tracking-tight  md:text-lg lg:text-2xl'>
						Find your Players stats sorted by game dates.
					</p>
					<p className='font-serif text-sm'>
						{' '}
						Click cards for dynamic profiles{' '}
					</p>
				</div>
			</HeroBanner>

			<div className='flex justify-center gap-2 pb-10 pt-10'>
				<label className='font-serif text-lg md:text-2xl'>
					{' '}
					Please Select Game Date:{' '}
				</label>
				<select
					onChange={(e) => setSelectedDate(e.target.value)}
					className='flex items-center rounded-lg border  border-black font-serif dark:bg-neutral-900 md:px-2 md:text-xl'>
					{dateOfGames.map((date) => {
						return (
							<option key={date} value={date}>
								{date}
							</option>
						);
					})}
				</select>
			</div>

			<div className='flex flex-col items-center justify-center gap-10 p-10  pb-20 text-4xl lg:flex-row'>
				{showInfo.map((player) => {
					const playerID = player.personId;
					let currentPhoto = '';
					let playerName = '';
					for (let i = 0; i < players.length; i++) {
						if (players[i].id === playerID) {
							currentPhoto = players[i].photo;
							playerName = `${players[i].name.first} ${players[i].name.last}`;
						}
					}

					const photo = players;
					return (
						<div
							className='relative flex min-h-[65vh] w-11/12 transform-gpu flex-col rounded-xl border  border-black bg-neutral-600 text-white shadow-2xl  ring ring-black duration-700 hover:scale-110 dark:border-white dark:ring-white md:w-7/12 md:p-20 lg:block lg:min-h-[40vh] lg:w-2/12 lg:min-w-[10%] '
							key={playerID}>
							<Link href={`/players/${playerID}`}>
								<a>
									<div key={player.personId}>
										<Image
											src='/BGIMGs/wizardsLogo.png'
											objectFit='cover'
											objectPosition='center'
											alt='Wizards'
											layout='fill'
											quality={100}
											className=' brightness-75 filter'
										/>

										<div className='z-1 absolute inset-0 flex flex-col  bg-neutral-900 bg-opacity-70 text-center'>
											<Image
												src={currentPhoto}
												width={200}
												height={250}
												layout='intrinsic'
												alt={player.personId}
												className='rounded-xl bg-white bg-opacity-20'
											/>

											<span className='text-2xl'> {playerName}</span>
											<span className='font-serif text-base'>
												ID: {player.personId}
											</span>
											<div className='flex flex-wrap items-center gap-8 px-1  pt-14 font-serif text-base'>
												<div className='flex flex-col'>
													<span className='text-2xl'>
														{' '}
														{player.fieldGoalsAttempted}
													</span>
													<span>FGA</span>
												</div>

												<div className='flex flex-col'>
													<span className='text-2xl'>{player.plusMinus}</span>
													<span>+ / -</span>
												</div>

												<div className='flex flex-col'>
													<span className='text-2xl'>
														{player.plusMinusPer36MP}
													</span>
													<span>+ / - per 36 Min</span>
												</div>
												<div className='flex flex-col'>
													<span className='text-2xl'>{player.points}</span>
													<span>Pts</span>
												</div>
												<div className='flex flex-col'>
													<span className='text-2xl'>
														{player.pointsPer36MP}
													</span>
													<span>Pts/36 M</span>
												</div>
												<div className='flex flex-col'>
													<Image
														src='/BGIMGs/wizardsLogo.png'
														objectFit='cover'
														objectPosition='center'
														height={50}
														width={50}
														alt='League Of Legends Cover'
														layout='fixed'
														quality={100}
														className=''
													/>
												</div>
											</div>
										</div>
									</div>
								</a>
							</Link>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Stats;
