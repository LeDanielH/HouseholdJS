import React from 'react'
import * as CSS from 'csstype'
import { GlobalsNumber } from 'csstype'

// shamelessly copied from styled-components type definitions, because that's all I need at the moment
export type CSSProperties = CSS.Properties<string | number>
export type CSSPseudos = { [K in CSS.Pseudos]?: CSSObject }
export interface CSSObject extends CSSProperties, CSSPseudos {
	[key: string]: CSSObject | string | number | undefined
}
export type CSSKeyframes = object & { [key: string]: CSSObject }

export enum SpacingEnum {
	big = 'big',
	default = 'default',
	small = 'small'
}

export type UnitType = 'px' | 'em' | 'rem' | 'ms' | 's' | 'deg' | '%' // todo add more units if needed

/**
 * @ignore
 */
export type ExtractNumberAndUnitType = [number, string]

export interface TransitionOptions {
	timing?: CSSObject['transitionTimingFunction']
	durationInMs?: number
	willChange?: boolean
}

export type TransitionPropertiesType = Array<keyof CSSObject> | keyof CSSObject

export interface WithTransitionProps {
	transitionProperties: TransitionPropertiesType
	transitionOptions: TransitionOptions
	disableTransitions: boolean
}

export type WithTransitionPropType = Partial<WithTransitionProps> | true

interface PositionedOnlyProps {
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

export type DivProps = Omit<
	React.HTMLProps<HTMLDivElement>,
	'wrap' | 'ref' | 'as'
>

export type ImageProps = React.HTMLProps<HTMLImageElement>

export type SvgProps = React.SVGProps<HTMLOrSVGElement>

export interface CommonElementProps extends DivProps {
	isInline?: boolean
	withBottomSpacing?: boolean | string | SpacingEnum
	height?: string
	background?: CSS.BackgroundProperty<string>
	backgroundColor?: CSS.BackgroundColorProperty
	isRelative?: boolean
	withPointer?: boolean
	fullWidth?: boolean
	maxWidth?: CSS.MaxWidthProperty<string>
	withTransition?: WithTransitionPropType
}

export interface FlexParentProps extends CommonElementProps {
	alignItems?: CSS.AlignItemsProperty
	justifyContent?: CSS.JustifyContentProperty
	wrap?: boolean
	column?: boolean
	reverse?: boolean
	fillHeight?: boolean
}

export interface FlexChildProps
	extends Omit<CommonElementProps, 'maxWidth' | 'fullWidth' | 'isInline'> {
	grow?: boolean | number | GlobalsNumber
	shrink?: boolean | number | GlobalsNumber
	width?: string
	noFontSize?: boolean
	justifySelfEnd?: boolean
}

export type PositionedProps = DivProps &
	LocationProps &
	PositionedOnlyProps &
	Pick<CommonElementProps, 'withTransition'>

export type SpacerProps = DivProps & LocationProps

export interface SimpleWrapperProps extends CommonElementProps {
	center?: boolean
	withBefore?: CSSObject
	withAfter?: CSSObject
}
