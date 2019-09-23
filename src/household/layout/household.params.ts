import { CSSObject } from 'styled-components'
import {
	HHChildProps,
	HHCommonProps,
	HHGrandparentProps,
	HHPetProps,
	HHWallProps,
	HHSpacingSizesEnum
} from './household.types'
import { HHParentProps } from './household.types'
import { isBool } from '../../utils/isBool'
import { getZeroOrString } from '../../utils/getZeroOrString'
import { getSpacingOrString } from '../../utils/getSpacingOrString'
import { HHTheme } from '../theme'

export const getHHCommonProps = ({
	spacing = HHSpacingSizesEnum.default,
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

export const getHHParentProps = ({
	fillHeight,
	column,
	reverse,
	wrap,
	justifyContent,
	alignItems,
	isInline,
	...rest
}: HHParentProps): CSSObject => ({
	...getHHCommonProps(rest),
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

export const getHHChildProps = ({
	grow,
	shrink,
	width,
	noFontSize,
	justifySelfEnd,
	...rest
}: HHChildProps): CSSObject => ({
	...getHHCommonProps(rest),
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

export const getHHGrandparentProps = ({
	center,
	isInline,
	...rest
}: HHGrandparentProps): CSSObject => ({
	...getHHCommonProps(rest),
	...(center && {
		marginLeft: 'auto',
		marginRight: 'auto'
	}),
	...(isInline && {
		display: 'inline-block'
	})
})

export const getHHPetProps = ({
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

export const getHHWallProps = ({
	top,
	right,
	bottom,
	left,
	vertical,
	horizontal,
	all,
	spacing = HHSpacingSizesEnum.default
}: HHWallProps): CSSObject | {} => ({
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
