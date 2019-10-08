// @flow

declare module '@household/layout' {

	declare export type HHSpacingEnum =
		| 'huge'
		| 'big'
		| 'default'
		| 'small'
		| 'tiny'

	declare type Positioned = {
		zIndex?: number,
		position?: 'absolute' | 'fixed' | 'relative'
	}

	declare export type HHLocation = {
		top?: boolean | string,
		right?: boolean | string,
		bottom?: boolean | string,
		left?: boolean | string,
		all?: boolean | string,
		vertical?: boolean | string,
		horizontal?: boolean | string
	}

	declare export type HHCommon = {
		isInline?: boolean,
		spacing?: HHSpacingEnum,
		withBottomSpacing?: boolean,
		height?: string,
		background?: string,
		isRelative?: boolean,
		withPointer?: boolean,
		fullWidth?: boolean,
		maxWidth?: string
	}
	declare export type HHParent = HHCommon & {
		alignItems?: string,
		justifyContent?: string,
		wrap?: boolean,
		column?: boolean,
		reverse?: boolean,
		fillHeight?: boolean
	}

	declare export type HHFlexParent = HHParent

	declare export type HHChild = $Diff<
		HHCommon,
		{
			maxWidth: *,
			fullWidth: *,
			isInline: *
		}
	> & {
		grow?: boolean | number,
		shrink?: boolean | number,
		width?: string,
		noFontSize?: boolean,
		justifySelfEnd?: boolean
	}

	declare export type HHFlexChild = HHChild

	declare export type HHPet = HHLocation & Positioned

	declare export type HHPositioned = HHPet

	declare export type HHWall = HHLocation & {
		spacing: $PropertyType<HHCommon, 'spacing'>
	}

	declare export type HHSpacer = HHWall

	declare export type HHGrandparent = HHCommon & { center?: boolean }

	declare export type HHSimple = HHGrandparent
}
