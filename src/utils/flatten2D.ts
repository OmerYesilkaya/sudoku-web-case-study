export default function flatten2D(grid: number[][]): number[] {
	return grid.reduce((acc, cur) => {
		return [...acc, ...cur] as number[];
	}, [] as number[]);
}
