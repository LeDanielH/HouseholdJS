import { HTMLProps } from 'react'
import { SvgProps, CssPointingToType } from '@householdjs/types'

export type SvgIconWrapperProps = {
	pointingTo?: CssPointingToType
	withPointer?: boolean
	size: number // in px
} & HTMLProps<HTMLElement>

export type SvgIconProps = Omit<
	SvgProps,
	'overflowFixScaleRatio' | 'overflowFixPosition' | 'size'
> &
	SvgIconWrapperProps
