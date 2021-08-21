export default function toReadableTime(time: number) {
	const seconds = time % 60;
	time = Math.floor(time / 60);
	const minutes = time % 60;
	time = Math.floor(time / 60);
	const hours = time % 24;

	return `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
}
