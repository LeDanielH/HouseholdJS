import { CSSObject } from 'styled-components'
import {
	HouseholdChildProps,
	HouseholdCommonProps,
	HouseholdGrandparentProps,
	HouseholdPetProps,
	HouseholdWallProps,
	SpacingSizesEnum
} from './household.types'
import { SizesMap } from './household.constants'
import { HouseholdParentProps } from './household.types'
import { getSpacingOrString, getZeroOrString, isBool } from './household.utils'

export const getHouseholdCommonProps = ({
	spacing = SpacingSizesEnum.default,
	withBottomSpacing = false,
	height,
	background,
	isRelative = false,
	withPointer = false,
	fullWidth = false,
	maxWidth
}: HouseholdCommonProps): CSSObject => ({
	height,
	background,
	maxWidth,
	...(isRelative && {
		position: 'relative'
	}),
	...(withPointer && {
		cursor: 'pointer'
	}),
	...(fullWidth && {
		width: '100%'
	}),
	...(withBottomSpacing && {
		marginBottom: SizesMap[spacing]
	})
})

export const getHouseholdParentProps = ({
	fillHeight,
	column,
	reverse,
	wrap,
	justifyContent,
	alignItems,
	isInline,
	...rest
}: HouseholdParentProps): CSSObject => ({
	...getHouseholdCommonProps(rest),
	justifyContent,
	alignItems,
	...(fillHeight && {
		height: '100%'
	}),
	...(column && {
		flexDirection: 'column'
	}),
	...(reverse && {
		flexDirection: column ? 'column-reverse' : 'row-reverse'
	}),
	...(wrap && {
		flexWrap: 'wrap'
	}),
	...(isInline && {
		display: 'inline-flex'
	})
})

export const getHouseholdChildProps = ({
	grow,
	shrink,
	width,
	noFontSize,
	justifySelfEnd,
	...rest
}: HouseholdChildProps): CSSObject => ({
	...getHouseholdCommonProps(rest),
	display: 'inline-block',
	flexGrow: +isBool(grow) || (grow as number),
	flexShrink: +isBool(shrink) || (shrink as number),
	...(width && {
		maxWidth: width
	}),
	flexBasis: width || 'auto',
	...(noFontSize && {
		fontSize: 0
	}),
	...(justifySelfEnd && {
		marginLeft: 'auto'
	})
})

export const getHouseholdGrandParentProps = ({
	center,
	...rest
}: HouseholdGrandparentProps): CSSObject => ({
	...getHouseholdCommonProps(rest),
	...(center && {
		marginLeft: 'auto',
		marginRight: 'auto'
	})
})

export const getHouseholdPetProps = ({
	top,
	right,
	bottom,
	left,
	all,
	vertical,
	horizontal,
	zIndex,
	position = 'absolute'
}: HouseholdPetProps): CSSObject => ({
	position,
	zIndex,
	...(top && {
		top: getZeroOrString(top)
	}),
	...(right && {
		right: getZeroOrString(right)
	}),
	...(bottom && {
		bottom: getZeroOrString(bottom)
	}),
	...(left && {
		left: getZeroOrString(left)
	}),
	...(all && {
		top: getZeroOrString(all),
		right: getZeroOrString(all),
		bottom: getZeroOrString(all),
		left: getZeroOrString(all)
	}),
	...(vertical && {
		top: getZeroOrString(vertical),
		bottom: getZeroOrString(vertical)
	}),
	...(horizontal && {
		right: getZeroOrString(horizontal),
		left: getZeroOrString(horizontal)
	})
})

export const getHouseholdWallProps = ({
	top,
	right,
	bottom,
	left,
	vertical,
	horizontal,
	all,
	spacing = SpacingSizesEnum.default
}: HouseholdWallProps): CSSObject | {} => ({
	// the object can be empty
	...(top && {
		paddingTop: getSpacingOrString(top, spacing)
	}),
	...(right && {
		paddingRight: getSpacingOrString(right, spacing)
	}),
	...(bottom && {
		paddingBottom: getSpacingOrString(bottom, spacing)
	}),
	...(left && {
		paddingLeft: getSpacingOrString(left, spacing)
	}),
	...(vertical && {
		paddingTop: getSpacingOrString(vertical, spacing),
		paddingBottom: getSpacingOrString(vertical, spacing)
	}),
	...(horizontal && {
		paddingLeft: getSpacingOrString(horizontal, spacing),
		paddingRight: getSpacingOrString(horizontal, spacing)
	}),
	...(all && {
		padding: getSpacingOrString(all, spacing)
	})
})
