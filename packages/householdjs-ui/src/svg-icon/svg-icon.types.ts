import { HTMLProps } from 'react'
import { PointingToEnum, SvgSpecificProps, HtmlPropsToOmit } from '@householdjs/types'

export type SvgIconWrapperProps = {
	pointingTo?: PointingToEnum
	withPointer?: boolean
} & Omit<HTMLProps<HTMLSpanElement>, HtmlPropsToOmit>

export type SvgIconProps = Omit<
	SvgSpecificProps,
	'overflowFixScaleRatio' | 'overflowFixPosition'
> &
	SvgIconWrapperProps
