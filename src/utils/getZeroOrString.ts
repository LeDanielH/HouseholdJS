import { isBool } from './isBool'
export const getZeroOrString = (val: boolean | string): number | string =>
	isBool(val) ? 0 : (val as string)
