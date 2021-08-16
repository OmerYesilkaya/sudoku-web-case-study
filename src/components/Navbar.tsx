import { Flex, Text } from "@chakra-ui/react";
import { MdGridOn } from "react-icons/md";

export default function Navbar() {
	return (
		<Flex w="100%" bg="gray.200" justify="space-between" px="1em" py="0.5em" boxShadow="lg">
			<Flex color="gray.800" align="center">
				<MdGridOn size="2em" />

				<Text ml="10px" fontSize="3xl" fontWeight="black">
					Sudoku Web
				</Text>
			</Flex>
		</Flex>
	);
}
