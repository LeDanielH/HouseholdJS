import { isBool } from './isBool'
export const getZeroOrString = (val: true | string): number | string =>
	isBool(val) ? 0 : (val as string)
