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

export const isBool = (val: any) => 'boolean' === typeof val

export const getHouseholdCommonProps = ({
	spacing = SpacingSizesEnum.default,
	withBottomSpacing = false,
	height,
	background,
	isRelative = false,
	withPointer = false,
	fullWidth = false,
	maxWidth
}: HouseholdCommonProps) =>
	({
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
	} as CSSObject)

export const getHouseholdParentProps = ({
	fillHeight,
	column,
	reverse,
	wrap,
	justifyContent,
	alignItems,
	isInline,
	...rest
}: HouseholdParentProps) =>
	({
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
	} as CSSObject)

export const getHouseholdChildProps = ({
	grow,
	shrink,
	width,
	noFontSize,
	justifySelfEnd,
	...rest
}: HouseholdChildProps) =>
	({
		...getHouseholdCommonProps(rest),
		display: 'inline-block',
		flexGrow: +isBool(grow) || grow,
		flexShrink: +isBool(shrink) || shrink,
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
	} as CSSObject)

export const getHouseholdGrandParentProps = ({
	center,
	...rest
}: HouseholdGrandparentProps) => ({
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
}: HouseholdPetProps) =>
	({
		position,
		zIndex,
		...(top && {
			top: isBool(top) ? 0 : top
		}),
		...(right && {
			right: isBool(right) ? 0 : right
		}),
		...(bottom && {
			bottom: isBool(bottom) ? 0 : bottom
		}),
		...(left && {
			left: isBool(left) ? 0 : left
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
	} as CSSObject)

export const getHouseholdWallProps = ({
	top,
	right,
	bottom,
	left,
	vertical,
	horizontal,
	all,
	spacing = SpacingSizesEnum.default
}: HouseholdWallProps) =>
	({
		...(top && {
			paddingTop: isBool(top) ? SizesMap[spacing] : top
		}),
		...(right && {
			paddingRight: isBool(right) ? SizesMap[spacing] : right
		}),
		...(bottom && {
			paddingBottom: isBool(bottom) ? SizesMap[spacing] : bottom
		}),
		...(left && {
			paddingLeft: isBool(left) ? SizesMap[spacing] : left
		}),
		...(vertical && {
			paddingTop: isBool(vertical) ? SizesMap[spacing] : vertical,
			paddingBottom: isBool(vertical) ? SizesMap[spacing] : vertical
		}),
		...(horizontal && {
			paddingLeft: isBool(horizontal) ? SizesMap[spacing] : horizontal,
			paddingRight: isBool(horizontal) ? SizesMap[spacing] : horizontal
		}),
		...(all && {
			...padding(isBool(all) ? SizesMap[spacing] : (all as string))
		})
	} as CSSObject)
