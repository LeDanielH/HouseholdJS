import { withUnit } from './withUnit'

/**
 * @ignore
 */
export const ROOT_FONT_SIZE = 16

/**
 * @ignore
 */
export const withRem = (value: number): string =>
	withUnit(value / ROOT_FONT_SIZE, 'rem')
