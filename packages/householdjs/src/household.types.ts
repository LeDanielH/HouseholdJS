import * as CSS from 'csstype'
import React from 'react'
import { GlobalsNumber } from 'csstype'
import { SpacingEnum } from '@householdjs/utils'
import {CSSObject} from "styled-components";

interface PositionedOnlyProps {
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

export interface SidesProps {
	top?: boolean | string
	right?: boolean | string
	bottom?: boolean | string
	left?: boolean | string
	all?: boolean | string
	vertical?: boolean | string
	horizontal?: boolean | string
}

/**
 * @ignore
 */
export type DivProps = Omit<
	React.HTMLProps<HTMLDivElement>,
	'wrap' | 'ref' | 'as'
>

export type ImageProps = React.HTMLProps<HTMLImageElement>

export interface CommonHHElementProps extends DivProps {
	isInline?: boolean
	spacing?: SpacingEnum
	withBottomSpacing?: boolean
	height?: string
	background?: CSS.BackgroundProperty<string>
	isRelative?: boolean
	withPointer?: boolean
	fullWidth?: boolean
	maxWidth?: CSS.MaxWidthProperty<string>
}

export type LocationProps = RequireAtLeastOne<SidesProps, keyof SidesProps>

export interface FlexParentProps extends CommonHHElementProps {
	alignItems?: CSS.AlignItemsProperty
	justifyContent?: CSS.JustifyContentProperty
	wrap?: boolean
	column?: boolean
	reverse?: boolean
	fillHeight?: boolean
}

export interface FlexChildProps
	extends Omit<CommonHHElementProps, 'maxWidth' | 'fullWidth' | 'isInline'> {
	grow?: boolean | number | GlobalsNumber
	shrink?: boolean | number | GlobalsNumber
	width?: string
	noFontSize?: boolean
	justifySelfEnd?: boolean
}

export type PositionedProps = DivProps & LocationProps & PositionedOnlyProps

export type SpacerPropsWithoutRequired = DivProps &
	LocationProps &
	Pick<CommonHHElementProps, 'spacing'>

export type SpacerProps = RequireAtLeastOne<
	SpacerPropsWithoutRequired,
	'top' | 'right' | 'bottom' | 'left' | 'vertical' | 'horizontal' | 'all'
>

export interface SimpleWrapperProps extends CommonHHElementProps {
	center?: boolean,
	withBefore?: CSSObject,
	withAfter?: CSSObject,
}
