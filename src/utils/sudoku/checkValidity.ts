import { SudokuGame } from "models/SudokuGame";
import flatten2D from "utils/flatten2D";

export default function checkValidity(board: SudokuGame) {
	for (let row = 0; row < board.grid.length; row++) {
		for (let col = 0; col < board.grid[row].length; col++) {
			const cell = board.grid[row][col];
			if (cell.number === 0) {
				cell.isValid = true;
				continue;
			}

			cell.isValid = !(
				hasNumberInRow(row, cell.number, board) ||
				hasNumberInCol(col, cell.number, board) ||
				hasNumberInSection(cell.section, cell.number, board)
			);
		}
	}
}

function hasNumberInRow(row: number, number: number, board: SudokuGame) {
	return board.grid[row].filter((x) => x.number === number).length > 1;
}

function hasNumberInCol(col: number, number: number, board: SudokuGame) {
	let count = 0;
	for (let row = 0; row < board.grid.length; row++) {
		if (board.grid[row][col].number === number) {
			count += 1;
		}
	}
	return count > 1;
}

function hasNumberInSection(section: number, number: number, board: SudokuGame) {
	let count = 0;
	const cellsInSection = flatten2D(board.grid).filter((x) => x.section === section);
	for (let row = 0; row < cellsInSection.length; row++) {
		if (cellsInSection[row].number === number) {
			count += 1;
		}
	}
	return count > 1;
}
