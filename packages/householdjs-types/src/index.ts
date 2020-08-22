import React, { ReactNode } from 'react'
import { Property } from 'csstype'
import { CSSObject } from 'styled-components'

export enum SpacingEnum {
	big = 'big',
	default = 'default',
	small = 'small'
}

export type UnitType = 'px' | 'em' | 'rem' | 'ms' | 's' | 'deg' | '%' // todo add more units if needed

export enum PointingToEnum {
	top = 'top',
	right = 'right',
	bottom = 'bottom',
	left = 'left'
}

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
	position?: Extract<Property.Position, 'absolute' | 'fixed' | 'relative'>
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

export type HtmlPropsToOmit = 'wrap' | 'ref' | 'as' | 'width'

export type DivHtmlProps = Omit<
	React.HTMLProps<HTMLDivElement>,
	HtmlPropsToOmit
>

type ImageHtmlProps = React.HTMLProps<HTMLImageElement>

type ViewBoxProps = {
	viewBoxSize?: number
	viewBoxWidth?: number
	viewBoxHeight?: number
}

export type SvgSpecificProps = ViewBoxProps & {
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
	background?: Property.Background
	backgroundColor?: Property.BackgroundColor
	isRelative?: boolean
	withPointer?: boolean
	fullWidth?: boolean
	maxWidth?: Property.MaxWidth
	withTransition?: WithTransitionPropType
	zIndex?: Property.ZIndex
	noFontSize?: boolean
}

export type ImageProps = Pick<CommonElementProps, 'isInline'> & ImageHtmlProps

export interface FlexParentProps
	extends CommonElementProps,
		ContainerOnlyProps {
	alignItems?: Property.AlignItems
	justifyContent?: Property.JustifyContent
	wrap?: boolean
	column?: boolean
	reverse?: boolean
	fillHeight?: boolean
}

export interface FlexChildProps
	extends Omit<CommonElementProps, 'maxWidth' | 'isInline'> {
	grow?: boolean | number | Property.FlexGrow
	shrink?: boolean | number | Property.FlexShrink
	flexBasis?: string
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
