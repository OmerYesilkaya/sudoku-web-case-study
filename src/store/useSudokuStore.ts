import { games, SudokuData } from "constants/sudoku_games";
import { Cell } from "models/Cell";
import { GameHistory } from "models/GameHistory";
import { SudokuGame } from "models/SudokuGame";
import flatten2D from "utils/flatten2D";
import toReadableTime from "utils/toReadableTime";
import { generateId } from "utils/generateId";
import checkValidity from "utils/checkValidity";
import create from "zustand";
import { persist } from "zustand/middleware";
import deepCopy from "utils/deepCopy";

type SudokuStoreProps = {
	activeCell: Cell;
	currentGame: SudokuGame | null;
	timePassed: number;
	gameHistory: GameHistory[];
	gameState: SudokuGame[];
	t: number;

	redo: () => void;
	undo: () => void;
	setActiveCell: (id: string) => void;
	updateActiveCell: (number: number) => void;
	loadGame: (id: number) => void;
	setCurrentGame: (game: SudokuGame) => void;
	checkGame: () => any;
	removeCurrentGame: () => void;
	incrementTime: () => void;
	addToGameHistory: () => void;
};

export const useSudokuStore = create<SudokuStoreProps>(
	persist(
		(set, get) => ({
			// STATES
			activeCell: {} as Cell,
			timePassed: 0,
			gameHistory: [] as GameHistory[],
			currentGame: null,
			gameState: [] as SudokuGame[],
			t: 0,

			// ACTIONS
			redo: () => {
				if (get().t === get().gameState.length - 1) return;
				set((prev) => ({ t: prev.t + 1, currentGame: prev.gameState[prev.t + 1] }));
			},
			undo: () => {
				if (get().t === 0) return;
				set((prev) => ({ t: prev.t - 1, currentGame: prev.gameState[prev.t - 1] }));
			},

			setActiveCell: (id) => {
				const game = get().currentGame;
				if (!game) return;
				const targetCell = flatten2D(game.grid).filter((cell) => cell.id === id);
				if (!targetCell) return;

				set(() => ({ activeCell: targetCell[0] }));
			},
			updateActiveCell: (number) => {
				const activeCell = get().activeCell;
				if (activeCell.row === undefined || activeCell.col === undefined) return;
				const currentGame = get().currentGame;
				if (!currentGame) return;
				const copy = { ...currentGame };

				// Note: I had to create a `deep-copy` of this nested array because normal spread operator {...} wasn't enough.
				copy.grid = deepCopy(currentGame.grid);
				copy.grid[activeCell.row][activeCell.col].number = number;

				checkValidity(copy);

				set((prev) => ({
					activeCell: {} as Cell,
					t: prev.t + 1,
					currentGame: { ...copy },
					gameState: [...prev.gameState.splice(0, prev.t + 1), { ...copy }],
				}));
			},
			removeCurrentGame: () => set(() => ({ currentGame: null, timePassed: 0 })),
			checkGame: () => {
				const game = get().currentGame;
				if (!game) return;
				const cellArray = flatten2D(game.grid);

				const gameIsNotValid = cellArray.some((x) => x.isValid === false);
				const gameHasEmptyCells = cellArray.some((x) => x.number === 0);

				const state = { gameIsNotValid: gameIsNotValid, gameHasEmptyCells: gameHasEmptyCells };

				return state;
			},
			loadGame: (id) => {
				const target = games.find((game) => game.id === id) ?? ({} as SudokuData);
				const grid = target.grid;
				const board = [] as Cell[][];

				for (let i = 0; i < grid.length; i++) {
					board.push([]);
					for (let j = 0; j < grid[i].length; j++) {
						const cell = {} as Cell;

						cell.id = generateId();
						cell.col = j;
						cell.row = i;
						cell.section = Math.floor(j / 3) + Math.floor(i / 3) * 3;
						cell.number = grid[i][j];
						cell.isValid = true;
						cell.isStartCell = cell.number !== 0;
						board[i].push(cell);
					}
				}

				set(() => ({ gameState: [{ id: id, grid: board }], t: 0, currentGame: { id: id, grid: board } }));
			},
			setCurrentGame: (game: SudokuGame) => set(() => ({ currentGame: game })),
			incrementTime: () => set((prev) => ({ timePassed: prev.timePassed + 1 })),
			addToGameHistory: () => {
				const gameHistory = get().gameHistory;
				const game = get().currentGame;
				const timePassed = get().timePassed;
				if (!game) return;
				const newGameHistory = { id: game.id, time: toReadableTime(timePassed) };

				set(() => ({ gameHistory: [...gameHistory, newGameHistory] }));
			},
		}),
		{ name: "sudoku-storage" }
	)
);
