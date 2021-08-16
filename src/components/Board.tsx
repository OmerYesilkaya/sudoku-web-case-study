import { Center, Grid } from "@chakra-ui/react";
import { games } from "constants/sudoku_games";
import { SudokuGame } from "models/SudokuGame";
import { useParams } from "react-router-dom";
import flatten2D from "utils/flatten2D";

type Param = {
	id: string;
};

export default function Board() {
	const { id } = useParams<Param>();
	const canvasSize = (3 * window.innerHeight) / 4;
	const game = games.find((game) => game.id === parseInt(id)) ?? ({} as SudokuGame);

	return (
		<Grid
			userSelect="none"
			templateColumns="repeat(9, 1fr)"
			templateRows="repeat(9,1fr)"
			border="1px solid"
			borderColor="gray.300"
			w={canvasSize}
			h={canvasSize}
		>
			{flatten2D(game.grid).map((number) => (
				<Center border="1px solid" borderColor="gray.300" fontSize="4xl" fontWeight="black">
					{number === 0 ? "" : number}
				</Center>
			))}
		</Grid>
	);
}
