import { isBool } from './is-bool'
import { SpacingEnum } from './types'

export const Spacing = {
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
	spacing: SpacingEnum = SpacingEnum.default
): string => (isBool(val) ? Spacing[spacing] : (val as string))
