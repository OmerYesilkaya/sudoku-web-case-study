import { Button, Center, Flex, Text } from "@chakra-ui/react";
import Header from "components/common/Header";
import { useSudokuStore } from "store/useSudokuStore";
import { RiArrowGoBackLine } from "react-icons/ri";
import { useHistory } from "react-router-dom";

export default function GameHistory() {
	const { gameHistory } = useSudokuStore((state) => ({ gameHistory: state.gameHistory }));
	const history = useHistory();
	return (
		<Center w="100vw" h="100vh">
			<Flex direction="column" w="50%" maxH="80vh" h="80vh" overflow="auto">
				<Header>Game History</Header>
				<Flex direction="column" w="100%">
					{gameHistory.length > 0 ? (
						gameHistory.map((game) => (
							<Flex key={game.id} borderRadius="md" color="gray.900" mb="0.3em" bg="gray.300" py="1em" px="1.5em" w="100%">
								Sudoku {game.id}
								<Text ml="auto">{game.time}</Text>
							</Flex>
						))
					) : (
						<Text border="2px dashed white" p="1em">
							There are no finished games yet. Please finish a game first.
						</Text>
					)}
				</Flex>

				<Button colorScheme="orange" mt="auto" w="max-content" mx="auto" onClick={() => history.push("/")}>
					Go back <RiArrowGoBackLine size="1.3em" />
				</Button>
			</Flex>
		</Center>
	);
}
