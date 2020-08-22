import { HTMLProps } from 'react'
import { PointingToEnum, SvgSpecificProps } from '@householdjs/types'

export type SvgIconWrapperProps = {
	pointingTo?: PointingToEnum
	withPointer?: boolean
	size: number // in px
} & HTMLProps<HTMLElement>

export type SvgIconProps = Omit<
	SvgSpecificProps,
	'overflowFixScaleRatio' | 'overflowFixPosition' | 'size'
> &
	SvgIconWrapperProps
