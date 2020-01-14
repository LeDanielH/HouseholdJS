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
	val: boolean | string | SpacingEnum
): string => {
	if (isBool(val)) {
		return Spacing.default
	} else {
		const isSpacingVal = Object.keys(Spacing).includes(val as SpacingEnum)
		if (isSpacingVal) {
			return Spacing[val as SpacingEnum]
		}
		return val as string
	}
}
