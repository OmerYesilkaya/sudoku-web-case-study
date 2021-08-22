export default function isObjEmpty(obj: any) {
	return obj && Object.keys(obj).length === 0 && obj.constructor === Object;
}
