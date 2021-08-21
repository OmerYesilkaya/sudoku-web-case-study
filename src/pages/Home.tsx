import { Button, Center, Flex, Text } from "@chakra-ui/react";
import Header from "components/common/Header";
import Navbar from "components/Navbar";
import { MdHistory, MdPlayArrow } from "react-icons/md";
import { useHistory } from "react-router-dom";
import { useSudokuStore } from "store/useSudokuStore";

export default function Home() {
	const history = useHistory();
	const { currentGame } = useSudokuStore((state) => ({ currentGame: state.currentGame }));

	return (
		<Flex direction="column" w="100%" h="100%">
			<Navbar />
			<Center w="100%" h="100%">
				<Flex direction="column" align="center" w="25%">
					<Header>Welcome to Sudoku Web</Header>
					<Text textAlign="center" borderRadius="md" boxShadow="lg" bg="gray.300" color="gray.800" p="2em" mt="1em">
						Dolore cillum tempor labore exercitation ipsum mollit. Elit aliqua reprehenderit ipsum Lorem. Aliquip mollit pariatur ut
						cillum sunt ea. Anim non ea fugiat ut pariatur id. Est enim nostrud consectetur reprehenderit laborum officia quis ullamco.
						Lorem ex excepteur labore ad quis non excepteur irure enim. Et magna pariatur est labore. Tempor laborum anim magna esse
						proident sit. Tempor exercitation labore adipisicing nostrud aliquip ullamco ad occaecat elit quis et minim.
					</Text>
					<Flex>
						{currentGame && (
							<Button mt="1em" mr="0.5em" colorScheme="green" onClick={() => history.push(`/sudoku/${currentGame.id}`)}>
								<Text>Continue Playing</Text>
								<MdPlayArrow size="1.5em" />
							</Button>
						)}
						<Button variant={currentGame ? "outline" : "solid"} mt="1em" colorScheme="green" onClick={() => history.push("/sudoku")}>
							<Text>Start a new game</Text>
						</Button>
					</Flex>

					<Button mt="1em" colorScheme="orange" onClick={() => history.push("/history")}>
						<Text mr="0.5em">Check game history</Text> <MdHistory size="1.5em" />
					</Button>
				</Flex>
			</Center>
		</Flex>
	);
}
