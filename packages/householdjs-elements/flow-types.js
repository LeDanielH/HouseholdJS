// @flow

declare module '@household/layout' {
	declare export type SpacingEnum =
		| 'huge'
		| 'big'
		| 'default'
		| 'small'
		| 'tiny'

	declare type Positioned = {
		zIndex?: number,
		position?: 'absolute' | 'fixed' | 'relative'
	}

	declare export type Location = {
		top?: boolean | string,
		right?: boolean | string,
		bottom?: boolean | string,
		left?: boolean | string,
		all?: boolean | string,
		vertical?: boolean | string,
		horizontal?: boolean | string
	}

	declare export type Common = {
		isInline?: boolean,
		spacing?: SpacingEnum,
		withBottomSpacing?: boolean,
		height?: string,
		background?: string,
		isRelative?: boolean,
		withPointer?: boolean,
		fullWidth?: boolean,
		maxWidth?: string
	}
	declare export type FlexParent = Common & {
		alignItems?: string,
		justifyContent?: string,
		wrap?: boolean,
		column?: boolean,
		reverse?: boolean,
		fillHeight?: boolean
	}

	declare export type FlexChild = $Diff<
		Common,
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

	declare export type Positioned = Location & Positioned

	declare export type Spacer = Location & {
		spacing: $PropertyType<Common, 'spacing'>
	}

	declare export type Simple = Common & { center?: boolean }
}
