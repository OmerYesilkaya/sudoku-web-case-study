import { Button, Center, Flex, Grid } from "@chakra-ui/react";
import Header from "components/common/Header";
import GamePreview from "components/GamePreview";
import { games } from "constants/sudoku_games";
import { MdChevronLeft } from "react-icons/md";
import { useHistory } from "react-router-dom";

export default function GameSelect() {
	const history = useHistory();

	return (
		<Center>
			<Button
				colorScheme="orange"
				position="absolute"
				top="10px"
				right="10px"
				onClick={() => {
					history.push("/");
				}}
			>
				<MdChevronLeft size="1.5em" />
				Go back to main menu
			</Button>
			<Flex direction="column" w="100%" h="100%" align="center">
				<Header>Select a game</Header>
				<Grid templateColumns="repeat(3, 1fr)" templateRows="repeat(3, 1fr)" gap="1em" mt="1em">
					{games.map((game) => (
						<GamePreview key={`game-${game.id}`} game={game} />
					))}
				</Grid>
			</Flex>
		</Center>
	);
}
