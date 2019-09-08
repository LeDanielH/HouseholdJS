import * as CSS from "csstype";
import React from "react";

export type SpacingSizesType = "big" | "default" | "small" | string;
export type DivType = React.HTMLProps<HTMLDivElement>;
export type DirectionValueType = boolean | number

interface DirectionProps {
	top?: DirectionValueType;
	right?: DirectionValueType;
	bottom?: DirectionValueType;
	left?: DirectionValueType;
	all?: DirectionValueType;
	horizontal?: DirectionValueType;
	vertical?: DirectionValueType;
}

type DirectionType = keyof DirectionProps;

interface HouseholdCommonProps {
	height?: string;
	background?: CSS.ColorProperty;
	isRelative?: boolean;
	fullWidth?: boolean;
	fillHeight?: boolean;
	spacing?: SpacingSizesType;
	withSpacing?: DirectionType;
	withPointer?: boolean;
	zIndex?: number;
}


interface FlexParentProps {
	alignItems?: CSS.AlignItemsProperty;
	justifyContent?: CSS.JustifyContentProperty;
	wrap?: boolean;
	isInline?: boolean;
	flexDirection?: CSS.FlexDirectionProperty;
}

interface FlexChildProps {
	flexGrow?: number;
	flexShrink?: number;
	width?: string;
	justifySelfEnd?: boolean;
	noFontSize?: boolean;
}

export type HouseHoldParentProps = DivType & HouseholdCommonProps & FlexParentProps
export type HouseHoldChildProps = DivType & HouseHoldChildProps & FlexChildProps
export type HopuseHoldCatProps = DivType & DirectionProps
