import { PointingToEnum } from '@householdjs/types'

export const POINTING_TO_TO_DEGREES_MAP = {
	[PointingToEnum.top]: 0,
	[PointingToEnum.right]: 90,
	[PointingToEnum.bottom]: 180,
	[PointingToEnum.left]: 270
}

// element has to be initially pointing upwards for this to work as expected
export const getRotationBasedOnPointingTo = (
	pointingTo: PointingToEnum = PointingToEnum.top
): number => POINTING_TO_TO_DEGREES_MAP[pointingTo]
