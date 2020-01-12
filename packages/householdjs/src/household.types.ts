import * as CSS from 'csstype'
import React from 'react'
import { GlobalsNumber } from 'csstype'
import { SpacingEnum, WithTransitionPropType } from '@householdjs/utils'
import { CSSObject } from 'styled-components'

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

export interface CommonElementProps extends DivProps {
	isInline?: boolean
	withBottomSpacing?: boolean | string | SpacingEnum
	height?: string
	background?: CSS.BackgroundProperty<string>,
	backgroundColor?: CSS.BackgroundColorProperty,
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
