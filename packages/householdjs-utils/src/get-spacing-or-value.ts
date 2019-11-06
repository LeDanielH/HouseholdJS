import { isBool } from './is-bool'
import { HHSpacingEnum } from './types'

export const HHSpacing = {
	tiny: '0.25rem',
	small: '0.5rem',
	default: '1rem',
	big: '2rem',
	huge: '4rem'
}

/**
 * @ignore
 */
export const getSpacingOrValue = (
	val: boolean | string,
	spacing: HHSpacingEnum = HHSpacingEnum.default
): string => (isBool(val) ? HHSpacing[spacing] : (val as string))
