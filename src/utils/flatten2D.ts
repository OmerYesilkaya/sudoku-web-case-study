export default function flatten2D(grid: any[][]): any[] {
	return grid.reduce((acc, cur) => {
		return [...acc, ...cur] as any[];
	}, [] as any[]);
}
