import React, { ReactNode } from 'react'
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
export type CssDirectionType = 'top' | 'right' | 'bottom' | 'left'

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

export interface SpacingProps {
	sTop?: boolean | string
	sRight?: boolean | string
	sBottom?: boolean | string
	sLeft?: boolean | string
	sAll?: boolean | string
	sVertical?: boolean | string
	sHorizontal?: boolean | string
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

export type DivHtmlProps = Omit<
	React.HTMLProps<HTMLDivElement>,
	'wrap' | 'ref' | 'as' | 'width'
>

type ImageHtmlProps = React.HTMLProps<HTMLImageElement>

type ViewBoxSizeProps = {
	viewBoxSize: number
	viewBoxWidth?: number
	viewBoxHeight?: number
}

type ViewBoxValuesProps = {
	viewBoxWidth: number
	viewBoxHeight: number
	viewBoxSize?: number
}

type ViewBoxProps = ViewBoxSizeProps | ViewBoxValuesProps

type SvgSpecificProps = ViewBoxProps & {
	children: ReactNode
	size?: number
	overflowFixScaleRatio?: number
	overflowFixPosition?: number
}

// TODO fix any
type SvgHtmlProps = React.SVGProps<any>
export type SvgProps = SvgSpecificProps & Partial<SvgHtmlProps>
export type SvgParamsReturn = Omit<
	SvgProps,
	'size' | 'viewBoxWidth' | 'viewBoxHeight' | 'viewBoxSize'
>

export type ContainerOnlyProps = {
	withBottomMargin?: boolean | string
	width?: string
}

export interface CommonElementProps extends SpacerProps, DivHtmlProps {
	isInline?: boolean
	height?: string
	minHeight?: string
	background?: CSS.BackgroundProperty<string>
	backgroundColor?: CSS.BackgroundColorProperty
	isRelative?: boolean
	withPointer?: boolean
	fullWidth?: boolean
	maxWidth?: CSS.MaxWidthProperty<string>
	withTransition?: WithTransitionPropType
	zIndex?: CSS.ZIndexProperty
}

export type ImageProps = Pick<CommonElementProps, 'isInline'> & ImageHtmlProps

export interface FlexParentProps
	extends CommonElementProps,
		ContainerOnlyProps {
	alignItems?: CSS.AlignItemsProperty
	justifyContent?: CSS.JustifyContentProperty
	wrap?: boolean
	column?: boolean
	reverse?: boolean
	fillHeight?: boolean
}

export interface FlexChildProps
	extends Omit<CommonElementProps, 'maxWidth' | 'isInline'> {
	grow?: boolean | number | GlobalsNumber
	shrink?: boolean | number | GlobalsNumber
	flexBasis?: string
	noFontSize?: boolean
	justifySelfEnd?: boolean
	withIe?: boolean
}

export type PositionedProps = DivHtmlProps &
	LocationProps &
	PositionedOnlyProps &
	Pick<CommonElementProps, 'withTransition'>

export type SpacerProps = DivHtmlProps & SpacingProps

export interface SimpleWrapperProps
	extends CommonElementProps,
		ContainerOnlyProps {
	center?: boolean
	withBefore?: CSSObject
	withAfter?: CSSObject
}
