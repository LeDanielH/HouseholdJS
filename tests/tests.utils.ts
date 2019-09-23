export const toTest = (
	name: string,
	method: (...params: any[]) => void,
	params: any[],
	toBe: any
) => test(name, () => expect(method(...params)).toBe(toBe))
