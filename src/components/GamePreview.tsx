import { Button, Center, Flex, Grid } from "@chakra-ui/react";
import { SudokuData } from "constants/sudoku_games";
import { useHistory } from "react-router-dom";
import { useSudokuStore } from "store/useSudokuStore";
import flatten2D from "utils/flatten2D";

type Props = {
	game: SudokuData;
};

export default function GamePreview({ game }: Props) {
	const history = useHistory();
	const { removeCurrentGame } = useSudokuStore((state) => ({ removeCurrentGame: state.removeCurrentGame }));

	return (
		<Flex direction="column" align="center">
			<Grid border="1px solid" borderColor="gray.500" templateColumns="repeat(9, 1fr)" templateRows="repeat(9, 1fr)" fontSize="xs">
				{flatten2D(game.grid).map((number, idx) => (
					<Center key={`grid-${idx}`} border="1px solid" borderColor="gray.500" w="16px" h="16px" color="gray.300">
						{number === 0 ? "" : number}
					</Center>
				))}
			</Grid>
			<Button
				mt="1em"
				colorScheme="green"
				onClick={() => {
					removeCurrentGame();
					history.push(`/sudoku/${game.id}`);
				}}
			>
				Sudoku {game.id}
			</Button>
		</Flex>
	);
}
