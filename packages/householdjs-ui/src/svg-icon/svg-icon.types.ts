import { HTMLProps } from 'react'
import { SvgProps, CssDirectionType } from '@householdjs/types'

export type SvgIconWrapperProps = {
	direction?: CssDirectionType
	withPointer?: boolean
	size: number // in px
} & HTMLProps<HTMLElement>

export type SvgIconProps = Omit<
	SvgProps,
	'overflowFixScaleRatio' | 'overflowFixPosition' | 'size'
> &
	SvgIconWrapperProps
