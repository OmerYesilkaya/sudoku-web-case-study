import { SudokuGame } from "models/SudokuGame";

export const games: SudokuGame[] = [
	{
		id: 0,
		grid: [
			[0, 0, 3, 0, 2, 0, 6, 0, 0],
			[9, 0, 0, 3, 0, 5, 0, 0, 1],
			[0, 0, 1, 8, 0, 6, 4, 0, 0],
			[0, 0, 8, 1, 0, 2, 9, 0, 0],
			[7, 0, 0, 0, 0, 0, 0, 0, 8],
			[0, 0, 6, 7, 0, 8, 2, 0, 0],
			[0, 0, 2, 6, 0, 9, 5, 0, 0],
			[8, 0, 0, 2, 0, 3, 0, 0, 9],
			[0, 0, 5, 0, 1, 0, 3, 0, 0],
		],
	},
	{
		id: 1,
		grid: [
			[2, 0, 0, 0, 8, 0, 3, 0, 0],
			[0, 6, 0, 0, 7, 0, 0, 8, 4],
			[0, 3, 0, 5, 0, 0, 2, 0, 9],
			[0, 0, 0, 1, 0, 5, 4, 0, 8],
			[0, 0, 0, 0, 0, 0, 0, 0, 0],
			[4, 0, 2, 7, 0, 6, 0, 0, 0],
			[3, 0, 1, 0, 0, 7, 0, 4, 0],
			[7, 2, 0, 0, 4, 0, 0, 6, 0],
			[0, 0, 4, 0, 1, 0, 0, 0, 3],
		],
	},
	{
		id: 2,
		grid: [
			[0, 0, 0, 0, 0, 0, 9, 0, 7],
			[0, 0, 0, 4, 2, 0, 1, 8, 0],
			[0, 0, 0, 7, 0, 5, 0, 2, 6],
			[1, 0, 0, 9, 0, 4, 0, 0, 0],
			[0, 5, 0, 0, 0, 0, 0, 4, 0],
			[0, 0, 0, 5, 0, 7, 0, 0, 9],
			[9, 2, 0, 1, 0, 8, 0, 0, 0],
			[0, 3, 4, 0, 5, 9, 0, 0, 0],
			[5, 0, 7, 0, 0, 0, 0, 0, 0],
		],
	},
	{
		id: 3,
		grid: [
			[0, 3, 0, 0, 5, 0, 0, 4, 0],
			[0, 0, 8, 0, 1, 0, 5, 0, 0],
			[4, 6, 0, 0, 0, 0, 0, 1, 2],
			[0, 7, 0, 5, 0, 2, 0, 8, 0],
			[0, 0, 0, 6, 0, 3, 0, 0, 0],
			[0, 4, 0, 1, 0, 9, 0, 3, 0],
			[2, 5, 0, 0, 0, 0, 0, 9, 8],
			[0, 0, 1, 0, 2, 0, 6, 0, 0],
			[0, 8, 0, 0, 6, 0, 0, 2, 0],
		],
	},
	{
		id: 4,
		grid: [
			[0, 2, 0, 8, 1, 0, 7, 4, 0],
			[7, 0, 0, 0, 0, 3, 1, 0, 0],
			[0, 9, 0, 0, 0, 2, 8, 0, 5],
			[0, 0, 9, 0, 4, 0, 0, 8, 7],
			[4, 0, 0, 2, 0, 8, 0, 0, 3],
			[1, 6, 0, 0, 3, 0, 2, 0, 0],
			[3, 0, 2, 7, 0, 0, 0, 6, 0],
			[0, 0, 5, 6, 0, 0, 0, 0, 8],
			[0, 7, 6, 0, 5, 1, 0, 9, 0],
		],
	},
	{
		id: 5,
		grid: [
			[1, 0, 0, 9, 2, 0, 0, 0, 0],
			[5, 2, 4, 0, 1, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 7, 0],
			[0, 5, 0, 0, 0, 8, 1, 0, 2],
			[0, 0, 0, 0, 0, 0, 0, 0, 0],
			[4, 0, 2, 7, 0, 0, 0, 9, 0],
			[0, 6, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 3, 0, 9, 4, 5],
			[0, 0, 0, 0, 7, 1, 0, 0, 6],
		],
	},
	{
		id: 6,
		grid: [
			[0, 4, 3, 0, 8, 0, 2, 5, 0],
			[6, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 1, 0, 9, 4],
			[9, 0, 0, 0, 0, 4, 0, 7, 0],
			[0, 0, 0, 6, 0, 8, 0, 0, 0],
			[0, 1, 0, 2, 0, 0, 0, 0, 3],
			[8, 2, 0, 5, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 5],
			[0, 3, 4, 0, 9, 0, 7, 1, 0],
		],
	},
	{
		id: 7,
		grid: [
			[4, 8, 0, 0, 0, 6, 9, 0, 2],
			[0, 0, 2, 0, 0, 8, 0, 0, 1],
			[9, 0, 0, 3, 7, 0, 0, 6, 0],
			[8, 4, 0, 0, 1, 0, 2, 0, 0],
			[0, 0, 3, 7, 0, 4, 1, 0, 0],
			[0, 0, 1, 0, 6, 0, 0, 4, 9],
			[0, 2, 0, 0, 8, 5, 0, 0, 7],
			[7, 0, 0, 9, 0, 0, 6, 0, 0],
			[6, 0, 9, 2, 0, 0, 0, 1, 8],
		],
	},
	{
		id: 8,
		grid: [
			[0, 0, 0, 9, 0, 0, 0, 0, 2],
			[0, 5, 0, 1, 2, 3, 4, 0, 0],
			[0, 3, 0, 0, 0, 0, 1, 6, 0],
			[9, 0, 8, 0, 0, 0, 0, 0, 0],
			[0, 7, 0, 0, 0, 0, 0, 9, 0],
			[0, 0, 0, 0, 0, 0, 2, 0, 5],
			[0, 9, 1, 0, 0, 0, 0, 5, 0],
			[0, 0, 7, 4, 3, 9, 0, 2, 0],
			[4, 0, 0, 0, 0, 7, 0, 0, 0],
		],
	},
];
