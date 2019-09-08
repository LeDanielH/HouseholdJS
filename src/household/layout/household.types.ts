import * as CSS from 'csstype'
import React from 'react'

export enum SpacingSizesEnum {
	huge = 'huge',
	big = 'big',
	default = 'default',
	small = 'small',
	tiny = 'tiny'
}

export type DivType = Omit<React.HTMLProps<HTMLDivElement>, 'wrap'>

export interface HouseholdCommonProps extends DivType {
	isInline?: boolean
	spacing?: SpacingSizesEnum
	withBottomSpacing?: boolean
	height?: string
	background?: CSS.BackgroundProperty<string>
	isRelative?: boolean
	withPointer?: boolean
	fullWidth?: boolean
	maxWidth?: CSS.MaxWidthProperty<string>
}

export interface HouseholdLocationProps {
	top?: boolean | string
	right?: boolean | string
	bottom?: boolean | string
	left?: boolean | string
	all?: boolean | string
	vertical?: boolean | string
	horizontal?: boolean | string
}

export interface HouseholdParentProps extends HouseholdCommonProps {
	alignItems?: CSS.AlignItemsProperty
	justifyContent?: CSS.JustifyContentProperty
	wrap?: boolean
	column?: boolean
	reverse?: boolean
	fillHeight?: boolean
}

export interface HouseholdChildProps
	extends Omit<HouseholdCommonProps, 'maxWidth' | 'fullWidth' | 'isInline'> {
	grow?: boolean | number
	shrink?: boolean | number
	width?: string
	noFontSize?: boolean
	justifySelfEnd?: boolean
}

export interface HouseholdPetProps extends DivType, HouseholdLocationProps {
	zIndex?: number
	position?: Extract<CSS.PositionProperty, 'absolute' | 'fixed' | 'relative'>
}

export type HouseholdWallProps = DivType &
	HouseholdLocationProps &
	Pick<HouseholdCommonProps, 'spacing'>

export interface HouseholdGrandparentProps extends HouseholdCommonProps {
	center?: boolean
}
