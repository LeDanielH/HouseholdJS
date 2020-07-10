import { isBool } from './is-bool'
import { SpacingEnum } from '@householdjs/types'

export const Spacing = {
	small: '0.5rem',
	default: '1rem',
	big: '2rem'
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
		const isSpacingVal =
			Object.keys(Spacing).indexOf(val as SpacingEnum) > -1
		if (isSpacingVal) {
			return Spacing[val as SpacingEnum]
		}
		return val as string
	}
}
