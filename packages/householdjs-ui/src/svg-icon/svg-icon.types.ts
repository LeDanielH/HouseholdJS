import { HTMLProps } from 'react'
import { SvgProps, PointingToEnum } from '@householdjs/types'

export type SvgIconWrapperProps = {
	pointingTo?: PointingToEnum
	withPointer?: boolean
	size: number // in px
} & HTMLProps<HTMLElement>

export type SvgIconProps = Omit<
	SvgProps,
	'overflowFixScaleRatio' | 'overflowFixPosition' | 'size'
> &
	SvgIconWrapperProps
