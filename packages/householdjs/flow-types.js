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
	declare export type HHFlexParent = HHCommon & {
		alignItems?: string,
		justifyContent?: string,
		wrap?: boolean,
		column?: boolean,
		reverse?: boolean,
		fillHeight?: boolean
	}

	declare export type HHFlexChild = $Diff<
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

	declare export type HHPositioned = HHLocation & Positioned

	declare export type HHSpacer = HHLocation & {
		spacing: $PropertyType<HHCommon, 'spacing'>
	}

	declare export type HHSimple = HHCommon & { center?: boolean }
}
