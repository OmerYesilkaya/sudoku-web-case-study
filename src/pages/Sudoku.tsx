import { Box, Button, Center, Flex } from "@chakra-ui/react";
import Board from "components/Board";
import Numpad from "components/Numpad";
import Timer from "components/Timer";
import { useEffect } from "react";
import { MdChevronLeft } from "react-icons/md";
import { useHistory } from "react-router-dom";
import { useSudokuStore } from "store/useSudokuStore";

export default function Sudoku() {
	const history = useHistory();
	const { undo, redo } = useSudokuStore((state) => ({ undo: state.undo, redo: state.redo }));

	useEffect(() => {
		function handleKeyDown(e: KeyboardEvent) {
			if (e.ctrlKey && e.key === "z") {
				undo();
			} else if (e.ctrlKey && e.key === "y") {
				redo();
			}
		}

		window.addEventListener("keydown", handleKeyDown);

		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [redo, undo]);

	return (
		<Center w="100%" h="100%" position="relative">
			<Button colorScheme="orange" position="absolute" top="10px" right="10px" onClick={() => history.push("/sudoku")}>
				<MdChevronLeft size="1.5em" />
				Go back to Sudoku selection
			</Button>
			<Flex>
				<Box position="relative">
					<Center position="absolute" top="-30px" left="5px">
						<Timer />
					</Center>

					<Numpad />
				</Box>

				<Flex w="75vh" h="75vh" direction="column">
					<Board />
				</Flex>
			</Flex>
		</Center>
	);
}
