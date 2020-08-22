import { CssPointingToType } from '@householdjs/types'

export const POINTING_TO_TO_DEGREES_MAP: Record<CssPointingToType, number> = {
	top: 0,
	right: 90,
	bottom: 180,
	left: 270
}

// element has to be initially pointing upwards for this to work as expected
export const getRotationBasedOnPointingTo = (
	pointingTo: CssPointingToType = POINTING_TO_TO_DEGREES_MAP.top
): number => POINTING_TO_TO_DEGREES_MAP[pointingTo]
