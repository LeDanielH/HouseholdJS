import { isBool } from './isBool'

/**
 * @ignore
 */
export const getZeroOrString = (val: true | string): number | string =>
	isBool(val) ? 0 : (val as string)
