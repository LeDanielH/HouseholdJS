/**
 * @ignore
 */
import { withRem } from './with-unit'
import { ROOT_FONT_SIZE } from './constants'

export const pxToRem = (
	value: number,
	rootFontSize: number = ROOT_FONT_SIZE
): string => withRem(value / rootFontSize)
