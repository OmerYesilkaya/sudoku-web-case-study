import { Button, Flex, Grid, GridItem, useToast } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import { useSudokuStore } from "store/useSudokuStore";

export default function Numpad() {
	const { updateActiveCell, checkGame, addToGameHistory, removeCurrentGame, undo } = useSudokuStore((state) => ({
		updateActiveCell: state.updateActiveCell,
		checkGame: state.checkGame,
		addToGameHistory: state.addToGameHistory,
		removeCurrentGame: state.removeCurrentGame,
		undo: state.undo,
	}));
	const toast = useToast();
	const history = useHistory();

	function handleGameEnd() {
		const state = checkGame();
		if (state.gameHasEmptyCells) {
			toast({
				description: "Game is not over yet. Please finish the game before checking for it's correctness.",
				title: "Warning",
				status: "warning",
				duration: 3000,
				isClosable: true,
			});
		} else if (state.gameIsNotValid) {
			toast({
				description: "There are conflicts. Please remove conflicts then try again.",
				title: "Warning",
				status: "warning",
				duration: 3000,
				isClosable: true,
			});
		} else {
			toast({ description: "Congratulations, Game complete!", title: "Success!", status: "success", duration: 3000, isClosable: true });
			addToGameHistory();
			removeCurrentGame();
			history.push("/sudoku");
		}
	}

	return (
		<Flex direction="column" p="1em" borderRadius="md" boxShadow="lg" mr="1em" justify="space-between" h="100%" border="2px solid white">
			<Grid templateRows="repeat(4, 1fr)" templateColumns="repeat(3,1fr)" gap="10px" placeItems="center">
				{[...Array(9)].map((_, idx) => (
					<Button
						colorScheme="orange"
						key={`number-${idx}`}
						w="80px"
						h="80px"
						boxShadow="lg"
						fontSize="3xl"
						onClick={() => updateActiveCell(idx + 1)}
					>
						{idx + 1}
					</Button>
				))}
				<GridItem gridColumn="1 / 4" w="100%" h="100%">
					<Button colorScheme="teal" w="100%" fontSize="3xl" h="100%" onClick={() => updateActiveCell(0)}>
						Clear
					</Button>
				</GridItem>
			</Grid>
			<Flex w="100%" justify="space-between">
				<Button colorScheme="green" onClick={() => handleGameEnd()}>
					Check Correctness
				</Button>
				<Button colorScheme="orange" onClick={() => undo()}>
					Undo
				</Button>
			</Flex>
		</Flex>
	);
}
