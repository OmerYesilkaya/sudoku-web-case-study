import { Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useSudokuStore } from "store/useSudokuStore";
import toReadableTime from "utils/toReadableTime";

export default function Timer() {
	const { timePassed, incrementTime } = useSudokuStore((state) => ({ timePassed: state.timePassed, incrementTime: state.incrementTime }));

	useEffect(() => {
		const interval = setInterval(() => {
			incrementTime();
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	}, [incrementTime]);

	return <Text fontSize="xl">{toReadableTime(timePassed)}</Text>;
}
