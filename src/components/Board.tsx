import { Grid } from "@chakra-ui/react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSudokuStore } from "store/useSudokuStore";
import { MotionCenter } from "./motion/chakra";
import shallow from "zustand/shallow";
type Param = {
	id: string;
};

export default function Board() {
	const { id } = useParams<Param>();
	const canvasSize = (3 * window.innerHeight) / 4;
	const { activeCell, setActiveCell, loadGame, currentGame } = useSudokuStore(
		(state) => ({
			loadGame: state.loadGame,
			activeCell: state.activeCell,
			currentGame: state.currentGame,
			setActiveCell: state.setActiveCell,
			setCurrentGame: state.setCurrentGame,
		}),
		shallow
	);

	useEffect(() => {
		if (currentGame) return;
		loadGame(parseInt(id));
	}, [id, loadGame, currentGame]);

	return (
		<Grid userSelect="none" templateRows="repeat(9,1fr)" w={canvasSize} h={canvasSize} border="2px solid white">
			{currentGame &&
				currentGame.grid &&
				currentGame.grid.map((column, colIdx) => (
					<Grid
						key={`col-${colIdx}`}
						templateColumns="repeat(9, 1fr)"
						borderTop={colIdx / 3 === 1 || colIdx / 3 === 2 ? "4px solid white" : ""}
					>
						{column.map((cell, rowIdx) => (
							<MotionCenter
								key={`${cell.id}`}
								border={activeCell.id === cell.id ? "2px dashed" : "1px solid"}
								borderColor={activeCell.id === cell.id ? "gray.300" : "gray.500"}
								bgColor={cell.isValid ? "transparent" : "red.800"}
								fontSize="4xl"
								fontWeight="black"
								cursor={!cell.isStartCell ? "pointer" : "default"}
								onClick={!cell.isStartCell ? () => setActiveCell(cell.id) : () => {}}
								borderRight={(rowIdx + 1) % 3 === 0 && (rowIdx + 1) % 9 !== 0 ? "4px solid white" : ""}
							>
								{cell.number === 0 ? "" : cell.number}
							</MotionCenter>
						))}
					</Grid>
				))}
		</Grid>
	);
}
