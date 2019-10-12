import { isBool } from './is-bool'

/**
 * @ignore
 */
export const getZeroOrValue = (val: true | string): number | string =>
	isBool(val) ? 0 : (val as string)
