import { CSSObject } from 'styled-components'
import {
	HHChildProps,
	HHCommonProps,
	HHGrandparentProps,
	HHPetProps,
	HHWallProps,
	HHSpacingEnum,
	HHParentProps
} from './household.types'
import { HHTheme } from './household.theme'
import { getSpacingOrValue, getZeroOrValue, isBool } from '@householdjs/utils'

export const getHHCommonStyles = ({
	spacing = HHSpacingEnum.default,
	withBottomSpacing = false,
	height,
	background,
	isRelative = false,
	withPointer = false,
	fullWidth = false,
	maxWidth
}: HHCommonProps): CSSObject => ({
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
		marginBottom: HHTheme.spacing[spacing]
	})
})

export const getHHParentStyles = ({
	fillHeight,
	column,
	reverse,
	wrap,
	justifyContent,
	alignItems,
	isInline,
	...rest
}: HHParentProps): CSSObject => ({
	...getHHCommonStyles(rest),
	display: isInline ? 'inline-flex' : 'flex',
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
	})
})

export const getHHChildStyles = ({
	grow,
	shrink,
	width,
	noFontSize,
	justifySelfEnd,
	...rest
}: HHChildProps): CSSObject => ({
	...getHHCommonStyles(rest),
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

export const getHHGrandparentStyles = ({
	center,
	isInline,
	...rest
}: HHGrandparentProps): CSSObject => ({
	...getHHCommonStyles(rest),
	...(center && {
		marginLeft: 'auto',
		marginRight: 'auto'
	}),
	...(isInline && {
		display: 'inline-block'
	})
})

export const getHHSimpleStyles = getHHGrandparentStyles

export const getHHPetStyles = ({
	top,
	right,
	bottom,
	left,
	all,
	vertical,
	horizontal,
	zIndex,
	position = 'absolute'
}: HHPetProps): CSSObject => ({
	position,
	zIndex,
	...(top && {
		top: getZeroOrValue(top)
	}),
	...(right && {
		right: getZeroOrValue(right)
	}),
	...(bottom && {
		bottom: getZeroOrValue(bottom)
	}),
	...(left && {
		left: getZeroOrValue(left)
	}),
	...(all && {
		top: getZeroOrValue(all),
		right: getZeroOrValue(all),
		bottom: getZeroOrValue(all),
		left: getZeroOrValue(all)
	}),
	...(vertical && {
		top: getZeroOrValue(vertical),
		bottom: getZeroOrValue(vertical)
	}),
	...(horizontal && {
		right: getZeroOrValue(horizontal),
		left: getZeroOrValue(horizontal)
	})
})

export const getHHPositionedStyles = getHHPetStyles

export const getHHWallStyles = ({
	top,
	right,
	bottom,
	left,
	vertical,
	horizontal,
	all,
	spacing = HHSpacingEnum.default
}: HHWallProps): CSSObject | {} => ({
	// the object can be empty
	...(top && {
		paddingTop: getSpacingOrValue(top, spacing)
	}),
	...(right && {
		paddingRight: getSpacingOrValue(right, spacing)
	}),
	...(bottom && {
		paddingBottom: getSpacingOrValue(bottom, spacing)
	}),
	...(left && {
		paddingLeft: getSpacingOrValue(left, spacing)
	}),
	...(vertical && {
		paddingTop: getSpacingOrValue(vertical, spacing),
		paddingBottom: getSpacingOrValue(vertical, spacing)
	}),
	...(horizontal && {
		paddingLeft: getSpacingOrValue(horizontal, spacing),
		paddingRight: getSpacingOrValue(horizontal, spacing)
	}),
	...(all && {
		padding: getSpacingOrValue(all, spacing)
	})
})

export const getHHSpacerStyles = getHHWallStyles

export const getHHWindowStyles = (): CSSObject => ({
	display: 'block',
	width: '100%',
	height: 'auto'
})

export const getHHImageStyles = getHHWindowStyles
