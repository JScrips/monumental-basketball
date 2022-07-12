import React from 'react';
import { players } from '../data/players';
import { boxScores } from '../data/boxScores';
import Image from 'next/image';
import Link from 'next/dist/client/link';

const Team = () => {
	return (
		<section className='relative min-h-[20vh]  overflow-y-scroll px-10 pt-24 dark:bg-neutral-800'>
			<div className=' relative mx-auto'>
				<div className='relative mx-auto mb-12 max-w-xl text-center'>
					<span className='rounded-lg font-serif  text-xs font-semibold text-blue-500 lg:text-base'>
						Washington Wizards
					</span>
					<h2 className='font-heading mt-6 text-5xl font-semibold uppercase text-black dark:text-white'>
						The gangs all here.
					</h2>
					<span className='font-serif text-sm text-black dark:text-white lg:text-lg'>
						{' '}
						click players to view dynamic profiles
					</span>
				</div>
				<div className='relative flex flex-col items-center gap-2 lg:flex-row '>
					{players.map((player) => {
						return (
							<Link href={`/players/${player.id}`} key={player.id}>
								<a>
									<div className='mx-auto mb-12 w-full transform-gpu duration-300 hover:scale-110 hover:transform-gpu hover:duration-300 '>
										<div className='flex justify-center'>
											<div>
												<Image
													className=''
													width={260}
													height={190}
													src={player.photo}
													layout='intrinsic'
													alt={`${player.name.first} ${player.name.last}`}
												/>
												<div className=''>
													<h3 className='font-heading mb-2 font-serif text-lg  dark:text-white'>
														{player.name.first} {player.name.last}
													</h3>
												</div>
											</div>
										</div>
									</div>
								</a>
							</Link>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Team;
