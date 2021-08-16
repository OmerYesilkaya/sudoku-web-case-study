import { Button, Center, Flex, Grid } from "@chakra-ui/react";
import { SudokuGame } from "models/SudokuGame";
import { useHistory } from "react-router-dom";
import flatten2D from "utils/flatten2D";

type Props = {
	game: SudokuGame;
};

export default function GamePreview({ game }: Props) {
	const history = useHistory();

	return (
		<Flex direction="column" align="center">
			<Grid border="1px solid white" templateColumns="repeat(9, 1fr)" templateRows="repeat(9, 1fr)" fontSize="sm">
				{flatten2D(game.grid).map((number) => (
					<Center key={game.id} border="1px solid white" w="20px" h="20px" color={number === 0 ? "gray.500" : "gray.400"}>
						{number === 0 ? "X" : number}
					</Center>
				))}
			</Grid>
			<Button mt="1em" colorScheme="green" onClick={() => history.push(`/sudoku/${game.id}`)}>
				Sudoku {game.id}
			</Button>
		</Flex>
	);
}
