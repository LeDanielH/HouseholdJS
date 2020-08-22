export {
	extractNumberAndUnitFromString,
	enaufs
} from './extract-number-and-unit-from-string'
export { getSpacingOrValue, Spacing } from './get-spacing-or-value'
export { getZeroOrValue } from './get-zero-or-value'
export { isBool } from './is-bool'
export { multiplyStringValue, mvws } from './multiply-string-value'
export { pxToRem } from './px-to-rem'
export { withPseudo, withAfter, withBefore } from './with-pseudo'
export { withTransition } from './with-transition'
export {
	getRotationBasedOnPointingTo,
	POINTING_TO_TO_DEGREES_MAP
} from './getRotationBasedOnPointingTo'

// TODO: I need them temporarily, will move them to another package altogether
export {
	round,
	roundDown,
	roundUp,
	getNumber,
	getPositiveNumber,
	getRoundedNumber,
	isZeroOrPositiveNumber,
	isPositiveNumber
} from './numbersMod'

export {
	withUnit,
	withRem,
	withMs,
	withPx,
	withDeg,
	withPercent
} from './with-unit'
