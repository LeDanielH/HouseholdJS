import { CSSObject } from 'styled-components'
import {
	HHFlexChildProps,
	HHCommonProps,
	HHSimpleProps,
	HHPositionedProps,
	HHWallProps,
	HHFlexParentProps
} from './household.types'
import {
	getSpacingOrValue,
	getZeroOrValue,
	HHSpacingEnum,
	isBool,
	HHSpacing
} from '@householdjs/utils'

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
		marginBottom: HHSpacing[spacing]
	})
})

export const getHHFlexParentStyles = ({
	fillHeight,
	column,
	reverse,
	wrap,
	justifyContent,
	alignItems,
	isInline,
	...rest
}: HHFlexParentProps): CSSObject => ({
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

export const getHHFlexChildStyles = ({
	grow,
	shrink,
	width,
	noFontSize,
	justifySelfEnd,
	...rest
}: HHFlexChildProps): CSSObject => ({
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

export const getHHSimpleStyles = ({
	center,
	isInline,
	...rest
}: HHSimpleProps): CSSObject => ({
	...getHHCommonStyles(rest),
	...(center && {
		marginLeft: 'auto',
		marginRight: 'auto'
	}),
	...(isInline && {
		display: 'inline-block'
	})
})

export const getHHPositionedStyles = ({
	top,
	right,
	bottom,
	left,
	all,
	vertical,
	horizontal,
	zIndex,
	position = 'absolute'
}: HHPositionedProps): CSSObject => ({
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

export const getHHSpacerStyles = ({
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

export const getHHImageStyles = (): CSSObject => ({
	display: 'block',
	width: '100%',
	height: 'auto'
})
