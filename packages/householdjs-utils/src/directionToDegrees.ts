import { CssDirectionType } from '@householdjs/types'

const directionToDegrees: Record<CssDirectionType, number> = {
	top: 0,
	right: 90,
	bottom: 180,
	left: 270
}

// element has to be initially pointing upwards for this to work as expected
export const getRotationBasedOnDirection = (
	direction: CssDirectionType = directionToDegrees.top
): number => directionToDegrees[direction]
