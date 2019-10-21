import * as CSS from 'csstype'
import React from 'react'
import { GlobalsNumber } from 'csstype'
import { StyledComponent } from 'styled-components'
import { HHSpacingEnum } from '@householdjs/utils'

interface PositionedProps {
	zIndex?: number
	position?: Extract<CSS.PositionProperty, 'absolute' | 'fixed' | 'relative'>
}

/**
 * @ignore
 */
export type RequireAtLeastOne<T, Keys extends keyof T = keyof T> = Pick<
	T,
	Exclude<keyof T, Keys>
> &
	{
		[K in Keys]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<Keys, K>>>
	}[Keys]

export interface LocationProps {
	top?: boolean | string
	right?: boolean | string
	bottom?: boolean | string
	left?: boolean | string
	all?: boolean | string
	vertical?: boolean | string
	horizontal?: boolean | string
}

export type HHAssignType<
	T extends {},
	E extends keyof JSX.IntrinsicElements | React.ComponentType<any>
> = StyledComponent<E, any, T, never>

/**
 * @ignore
 */
export type HHDivProps = Omit<
	React.HTMLProps<HTMLDivElement>,
	'wrap' | 'ref' | 'as'
>
export type HHImageProps = React.HTMLProps<HTMLImageElement>

export interface HHCommonProps extends HHDivProps {
	isInline?: boolean
	spacing?: HHSpacingEnum
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

export interface HHFlexParentProps extends HHCommonProps {
	alignItems?: CSS.AlignItemsProperty
	justifyContent?: CSS.JustifyContentProperty
	wrap?: boolean
	column?: boolean
	reverse?: boolean
	fillHeight?: boolean
}

export interface HHFlexChildProps
	extends Omit<HHCommonProps, 'maxWidth' | 'fullWidth' | 'isInline'> {
	grow?: boolean | number | GlobalsNumber
	shrink?: boolean | number | GlobalsNumber
	width?: string
	noFontSize?: boolean
	justifySelfEnd?: boolean
}

export type HHPositionedProps = HHDivProps & HHLocationProps & PositionedProps

/**
 * @ignore
 */
export type HHWallPropsWithoutRequired = HHDivProps &
	HHLocationProps &
	Pick<HHCommonProps, 'spacing'>

export type HHWallProps = RequireAtLeastOne<
	HHWallPropsWithoutRequired,
	'top' | 'right' | 'bottom' | 'left' | 'vertical' | 'horizontal' | 'all'
>

export type HHSpacerProps = HHWallProps

export interface HHSimpleProps extends HHCommonProps {
	center?: boolean
}
