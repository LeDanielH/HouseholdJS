import { SpacingEnum } from '@householdjs/types'

export const Spacing = {
	[SpacingEnum.small]: '0.5rem',
	[SpacingEnum.default]: '1rem',
	[SpacingEnum.big]: '2rem'
}

/**
 * @ignore
 */
export const getSpacingOrValue = (
	val: true | string | SpacingEnum
): string | null => {
	if (val === true) {
		return Spacing[SpacingEnum.default]
	} else {
		const isSpacingVal =
			Object.keys(Spacing).indexOf(val as SpacingEnum) > -1
		if (isSpacingVal) {
			return Spacing[val as SpacingEnum]
		}
		return val as string
	}
}
