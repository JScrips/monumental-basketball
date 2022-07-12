import React from 'react';
import { players } from '../../components/data/players';
import { boxScores } from '../../components/data/boxScores';
import Image from 'next/dist/client/image';
import { useState } from 'react';
import PlayerHeader from '../../components/PlayerHeader';
import PlayerAverages from '../../components/utils/PlayerAverages';
const Players = ({ playerData }) => {
	const [currentCompare, setCurrentCompare] = useState([
		{
			personId: 6497,
			points: 4,
			fieldGoalsAttempted: 8,
			fieldGoalsAttemptedPer36MP: 10,
			plusMInus: -17,
			plusMinusPer36MP: -21,
			pointsPer36MP: 8.7551,
		},
	]);
	const player = playerData.player;
	const gamesPlayed = playerData.gamesAttended;

	const fetchPlayerGames = (chosenPlayerID) => {
		const gameDates = Object.keys(boxScores);
		const stats = gameDates.map((date) => {
			const playerObjArray = boxScores[date];
			// creates an array of Games, containing every player Object that played.
			const playerPlayedGamesArray = playerObjArray.filter(
				(playerObj) => playerObj.personId === Number(chosenPlayerID)
			);

			return playerPlayedGamesArray;
		});
		// creates an array of Games, filtered to contain only one player object if they played in a game
		let gamesAttended = [];
		const gamesPlayed = stats.filter(
			(arrayOfAttendance) => arrayOfAttendance.length > 0
		);
		for (let i = 0; i < gamesPlayed.length; i++) {
			gamesAttended.push(gamesPlayed[i][0]);
		}

		setCurrentCompare(gamesAttended);
	};

	const avgPoints = (
		gamesPlayed
			.map((game) => {
				return game.points;
			})
			.reduce((a, b) => a + b) / gamesPlayed.length
	)
		.toString()
		.slice(0, 5);
	const avgFGA = (
		gamesPlayed
			.map((game) => {
				return game.fieldGoalsAttempted;
			})
			.reduce((a, b) => a + b) / gamesPlayed.length
	)
		.toString()
		.slice(0, 5);
	const avgPP36M = (
		gamesPlayed
			.map((game) => {
				return game.pointsPer36MP;
			})
			.reduce((a, b) => a + b) / gamesPlayed.length
	)
		.toString()
		.slice(0, 5);

	const avgPlusMinus = (
		gamesPlayed
			.map((game) => {
				return game.plusMinus;
			})
			.reduce((a, b) => a + b) / gamesPlayed.length
	)
		.toString()
		.slice(0, 5);

	const avgPlusMinusPer36 = (
		gamesPlayed
			.map((game) => {
				return game.plusMinusPer36MP;
			})
			.reduce((a, b) => a + b) / gamesPlayed.length
	)
		.toString()
		.slice(0, 5);

	const ccAvgPoints =
		currentCompare.length > 0
			? (
					currentCompare
						.map((game) => {
							return game.points;
						})
						.reduce((a, b) => a + b) / gamesPlayed.length
			  )
					.toString()
					.slice(0, 5)
			: '';

	const ccAvgFGA =
		currentCompare.length > 0
			? (
					currentCompare
						.map((game) => {
							return game.fieldGoalsAttempted;
						})
						.reduce((a, b) => a + b) / gamesPlayed.length
			  )
					.toString()
					.slice(0, 5)
			: '';

	const ccAvgPP36M =
		currentCompare.length > 0
			? (
					currentCompare
						.map((game) => {
							return game.pointsPer36MP;
						})
						.reduce((a, b) => a + b) / gamesPlayed.length
			  )
					.toString()
					.slice(0, 5)
			: '';

	const ccAvgPlusMinus =
		currentCompare.length > 0
			? (
					currentCompare
						.map((game) => {
							return game.plusMinus;
						})
						.reduce((a, b) => a + b) / gamesPlayed.length
			  )
					.toString()
					.slice(0, 5)
			: '';

	const ccAvgPlusMinusPer36 =
		currentCompare.length > 0
			? (
					currentCompare
						.map((game) => {
							return game.plusMinusPer36MP;
						})
						.reduce((a, b) => a + b) / gamesPlayed.length
			  )
					.toString()
					.slice(0, 5)
			: '';

	return (
		<div className='flex flex-col items-center text-center text-sm'>
			<div className='flex flex-col dark:text-white'>
				<PlayerHeader player={player} />
				<PlayerAverages
					player={player}
					averages={[
						avgPoints,
						avgFGA,
						avgPP36M,
						avgPlusMinus,
						avgPlusMinusPer36,
					]}
				/>

				<div className='flex justify-center gap-6 pb-10 pt-10 font-serif'>
					<h3 className='md:text-2xl'> Compare {player.name.first} with</h3>
					<select
						onChange={(e) => fetchPlayerGames(e.target.value, players)}
						className='border border-black font-serif dark:bg-neutral-900 md:text-xl'>
						<option>Please Make a Selection</option>
						{players.map((player) => {
							return (
								<option key={player.name.last} value={player.id}>
									{player.name.first} {player.name.last}
								</option>
							);
						})}
					</select>
				</div>

				<div className='mb-10 flex justify-center border-b border-black border-opacity-20  font-serif dark:border-white dark:border-opacity-20'>
					<article className='flex  pb-10 text-xs md:text-xl lg:gap-40'>
						<div className='flex flex-col'>
							<div className='flex flex-col gap-6'>
								<div className='flex flex-col'>
									<span>Average Points:</span>
									<span> {avgPoints}</span>
								</div>
								<div className='flex flex-col'>
									<span>Average FGA:</span>
									<span> {avgFGA} </span>
								</div>
								<div className='flex flex-col'>
									<span>Average PP36M:</span>
									<span> {avgPP36M} </span>
								</div>
								<div className='flex flex-col'>
									<span>Average Plus Minus: </span>
									<span>{avgPlusMinus} </span>
								</div>
								<div className='flex flex-col'>
									<span>Avg Plus Minus / 36:</span>
									<span> {avgPlusMinusPer36} </span>
								</div>
							</div>
						</div>
						<div className='flex flex-col gap-7'>
							<h2> Difference Breakdown: </h2>
							{avgPoints - ccAvgPoints > 0 ? (
								<span className='text-green-600'>
									{(avgPoints - ccAvgPoints).toString().slice(0, 5)}
								</span>
							) : (
								<span className='text-red-600'>
									{(avgPoints - ccAvgPoints).toString().slice(0, 5)}
								</span>
							)}{' '}
							{avgFGA - ccAvgFGA > 0 ? (
								<span className='text-green-600'>
									{(avgFGA - ccAvgFGA).toString().slice(0, 5)}
								</span>
							) : (
								<span className='text-red-600'>
									{(avgFGA - ccAvgFGA).toString().slice(0, 5)}
								</span>
							)}{' '}
							{avgPP36M - ccAvgPP36M > 0 ? (
								<span className='text-green-600'>
									{(avgPP36M - ccAvgPP36M).toString().slice(0, 5)}
								</span>
							) : (
								<span className='text-red-600'>
									{(avgPP36M - ccAvgPP36M).toString().slice(0, 5)}
								</span>
							)}{' '}
							{avgPlusMinus - ccAvgPlusMinus > 0 ? (
								<span className='text-green-600'>
									{(avgPlusMinus - ccAvgPlusMinus).toString().slice(0, 5)}
								</span>
							) : (
								<span className='text-red-600'>
									{(avgPlusMinus - ccAvgPlusMinus).toString().slice(0, 5)}
								</span>
							)}{' '}
							{avgPlusMinusPer36 - ccAvgPlusMinusPer36 > 0 ? (
								<span className='text-green-600'>
									{(avgPlusMinusPer36 - ccAvgPlusMinusPer36)
										.toString()
										.slice(0, 5)}
								</span>
							) : (
								<span className='text-red-600'>
									{(avgPlusMinusPer36 - ccAvgPlusMinusPer36)
										.toString()
										.slice(0, 5)}
								</span>
							)}{' '}
						</div>
						<div className='flex flex-col'>
							<div className='flex flex-col gap-6'>
								<div className='flex flex-col'>
									<span>Average Points:</span>
									<span> {ccAvgPoints}</span>
								</div>

								<div className='flex flex-col'>
									<span>Average FGA:</span>
									<span> {ccAvgFGA}</span>
								</div>

								<div className='flex flex-col'>
									<span>Average PP36M:</span>
									<span> {ccAvgPP36M}</span>
								</div>

								<div className='flex flex-col'>
									<span>Average Plus Minus:</span>
									<span> {ccAvgPlusMinus}</span>
								</div>

								<div className='flex flex-col'>
									<span>Average Plus Minus / 36:</span>
									<span> {ccAvgPlusMinusPer36}</span>
								</div>
							</div>
						</div>
					</article>
				</div>

				<h3 className='pb-10 text-2xl font-bold'> List of Games Played </h3>
				<div className=' mx-auto flex max-h-[800px] w-11/12 flex-col gap-6 overflow-y-scroll border-t border-black text-sm lg:text-xl'>
					{gamesPlayed.map((game, i) => {
						return (
							<div
								key={game + gamesPlayed.indexOf(game)}
								className=' font-serif'>
								<span className=' font-serif text-2xl underline'>
									Game {i + 1}
								</span>

								<div className='mt-8 flex justify-between border-b border-black border-opacity-30 p-4 pb-4 text-xs dark:border-white dark:border-opacity-20 md:justify-evenly md:text-base'>
									<div className='flex flex-col gap-2'>
										<span>Points</span>
										<span> {game.points}</span>
									</div>

									<div className='flex flex-col gap-2'>
										<span>Pts / 36</span>
										<span> {game.pointsPer36MP}</span>
									</div>

									<div className='flex flex-col gap-2'>
										<span>FGA</span>
										<span> {game.fieldGoalsAttempted}</span>
									</div>

									<div className='flex flex-col gap-2'>
										<span>FGA/36</span>
										<span> {game.fieldGoalsAttemptedPer36MP}</span>
									</div>

									<div className='flex flex-col gap-2'>
										<span>+ / -</span>
										<span> {game.plusMinus}</span>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Players;

export const getStaticProps = async ({ params }) => {
	try {
		const player = players.find(
			(playerObj) => playerObj.id.toString() === params.id.toString()
		);

		const gameDates = Object.keys(boxScores);
		const stats = gameDates.map((date) => {
			const playerObjArray = boxScores[date];
			// creates an array of Games, containing every player Object that played.
			const playerPlayedGamesArray = playerObjArray.filter(
				(playerObj) => playerObj.personId.toString() === params.id.toString()
			);

			return playerPlayedGamesArray;
		});
		// creates an array of Games, filtered to contain only one player object if they played in a game
		let gamesAttended = [];
		const gamesPlayed = stats.filter(
			(arrayOfAttendance) => arrayOfAttendance.length > 0
		);
		for (let i = 0; i < gamesPlayed.length; i++) {
			gamesAttended.push(gamesPlayed[i][0]);
		}

		const playerData = { player, id: player.id, gamesAttended };
		return {
			props: { playerData },
		};
	} catch (err) {
		console.log(err);
	}
};

export const getStaticPaths = async () => {
	const paths = players.map((playerObj) => {
		return { params: { id: playerObj.id.toString() } };
	});
	return {
		paths,
		fallback: false,
	};
};
