import { withUnit } from './withUnit'

const ROOT_FONT_SIZE = 16
export const withRem = (value: number): string =>
	withUnit(value / ROOT_FONT_SIZE, 'rem')
