import { Button, Center, Flex } from "@chakra-ui/react";
import Board from "components/Board";
import Timer from "components/Timer";

export default function Sudoku() {
	return (
		<Center w="100%" h="100%">
			<Flex w="75vh" h="75vh" direction="column">
				<Board />
				<Flex justify="space-between" align="center" mt="1em">
					<Timer />
					<Flex>
						<Button colorScheme="green">Check Correctness</Button>
						<Button colorScheme="orange" ml="0.5em">
							Undo
						</Button>
					</Flex>
				</Flex>
			</Flex>
		</Center>
	);
}
