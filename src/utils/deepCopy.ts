export default function deepCopy(arr: any[]) {
	const copy = [...arr.map((a: any) => a.map((b: any) => ({ ...b })))];
	return [...copy];
}
