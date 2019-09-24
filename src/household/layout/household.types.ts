import * as CSS from 'csstype'
import React from 'react'
import { GlobalsNumber } from 'csstype'
import { RequireAtLeastOne } from '../../utils/types.utils'
import { HHThemeType } from '../theme'
import { HHWithChildrenProps } from '../../types'

interface PositionedProps {
	zIndex?: number
	position?: Extract<CSS.PositionProperty, 'absolute' | 'fixed' | 'relative'>
}

export interface LocationProps {
	top?: boolean | string
	right?: boolean | string
	bottom?: boolean | string
	left?: boolean | string
	all?: boolean | string
	vertical?: boolean | string
	horizontal?: boolean | string
}

export enum HHSpacingSizesEnum {
	huge = 'huge',
	big = 'big',
	default = 'default',
	small = 'small',
	tiny = 'tiny'
}

/**
 * @ignore
 */
export type HHDivType = Omit<React.HTMLProps<HTMLDivElement>, 'wrap'>

export interface HHCommonProps extends HHDivType {
	isInline?: boolean
	spacing?: HHSpacingSizesEnum
	withBottomSpacing?: boolean
	height?: string
	background?: CSS.BackgroundProperty<string>
	isRelative?: boolean
	withPointer?: boolean
	fullWidth?: boolean
	maxWidth?: CSS.MaxWidthProperty<string>
}
export type HHLocationProps = RequireAtLeastOne<
	LocationProps,
	keyof LocationProps
>

export interface HHParentProps extends HHCommonProps {
	alignItems?: CSS.AlignItemsProperty
	justifyContent?: CSS.JustifyContentProperty
	wrap?: boolean
	column?: boolean
	reverse?: boolean
	fillHeight?: boolean
}

export interface HHChildProps
	extends Omit<HHCommonProps, 'maxWidth' | 'fullWidth' | 'isInline'> {
	grow?: boolean | number | GlobalsNumber
	shrink?: boolean | number | GlobalsNumber
	width?: string
	noFontSize?: boolean
	justifySelfEnd?: boolean
}

export type HHPetProps = HHDivType & HHLocationProps & PositionedProps

export type HHPositionedProps = HHPetProps

/**
 * @ignore
 */
export type HHWallPropsWithoutRequired = HHDivType &
	HHLocationProps &
	Pick<HHCommonProps, 'spacing'>

export type HHWallProps = RequireAtLeastOne<
	HHWallPropsWithoutRequired,
	'top' | 'right' | 'bottom' | 'left' | 'vertical' | 'horizontal' | 'all'
>

export type HHSpacerProps = HHWallProps

export interface HHGrandparentProps extends HHCommonProps {
	center?: boolean
}

export type HHSimpleProps = HHGrandparentProps

export type HHWithThemeProps = {
	theme?: HHThemeType
}

export type HHProviderProps = HHWithThemeProps & HHWithChildrenProps
