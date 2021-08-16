import { Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function Timer() {
	const [time, setTime] = useState<number>(0);

	function toReadableTime(time: number) {
		const seconds = time % 60;
		time = Math.floor(time / 60);
		const minutes = time % 60;
		time = Math.floor(time / 60);
		const hours = time % 24;

		return `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
	}

	useEffect(() => {
		const interval = setInterval(() => {
			setTime((prev) => prev + 1);
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	}, []);

	return <Text fontSize="xl">{toReadableTime(time)}</Text>;
}
