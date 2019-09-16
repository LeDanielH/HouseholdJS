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
import { margin, padding, position as positionPolished } from 'polished'
import { isBool } from './household.utils'

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
		...margin(null, 'auto')
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
		top: isBool(top) ? 0 : (top as string)
	}),
	...(right && {
		right: isBool(right) ? 0 : (right as string)
	}),
	...(bottom && {
		bottom: isBool(bottom) ? 0 : (bottom as string)
	}),
	...(left && {
		left: isBool(left) ? 0 : (left as string)
	}),
	...(all && {
		...positionPolished(position, isBool(all) ? 0 : (all as string))
	}),
	...(vertical && {
		...positionPolished(
			position,
			isBool(vertical) ? 0 : (vertical as string),
			null
		)
	}),
	...(horizontal && {
		...positionPolished(
			position,
			null,
			isBool(horizontal) ? 0 : (horizontal as string)
		)
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
		paddingTop: isBool(top) ? SizesMap[spacing] : (top as string)
	}),
	...(right && {
		paddingRight: isBool(right) ? SizesMap[spacing] : (right as string)
	}),
	...(bottom && {
		paddingBottom: isBool(bottom) ? SizesMap[spacing] : (bottom as string)
	}),
	...(left && {
		paddingLeft: isBool(left) ? SizesMap[spacing] : (left as string)
	}),
	...(vertical && {
		paddingTop: isBool(vertical) ? SizesMap[spacing] : (vertical as string),
		paddingBottom: isBool(vertical)
			? SizesMap[spacing]
			: (vertical as string)
	}),
	...(horizontal && {
		paddingLeft: isBool(horizontal)
			? SizesMap[spacing]
			: (horizontal as string),
		paddingRight: isBool(horizontal)
			? SizesMap[spacing]
			: (horizontal as string)
	}),
	...(all && {
		...padding(isBool(all) ? SizesMap[spacing] : (all as string))
	})
})
