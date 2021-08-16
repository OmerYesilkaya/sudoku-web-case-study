import { Center, Flex, Grid } from "@chakra-ui/react";
import Header from "components/common/Header";
import GamePreview from "components/GamePreview";
import { games } from "constants/sudoku_games";

export default function GameSelect() {
	return (
		<Center>
			<Flex direction="column" w="100%" h="100%" align="center">
				<Header>Select a game</Header>
				<Grid templateColumns="repeat(3, 1fr)" templateRows="repeat(3, 1fr)" gap="1em" mt="1em">
					{games.map((game) => (
						<GamePreview key={game.id} game={game} />
					))}
				</Grid>
			</Flex>
		</Center>
	);
}
