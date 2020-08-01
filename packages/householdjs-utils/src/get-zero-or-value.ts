/**
 * @ignore
 */
export const getZeroOrValue = (val: true | string): number | string =>
	val === true ? 0 : (val as string)
