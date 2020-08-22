import React from 'react'
import { SvgIconWrapper } from './svg-icon.styled'
import { Svg } from '@householdjs/elements'
import type { SvgIconProps } from './svg-icon.types.ts'

export const SvgIcon = ({
	pointingTo,
	withPointer,
	size,
	viewBoxWidth,
	viewBoxHeight,
	children,
	...restProps
}: SvgIconProps) => {
	return (
		<SvgIconWrapper
			pointingTo={pointingTo}
			withPointer={withPointer}
			size={size}
			{...restProps}
		>
			<Svg
				size={size}
				viewBoxWidth={viewBoxWidth}
				viewBoxHeight={viewBoxHeight}
			>
				{children}
			</Svg>
		</SvgIconWrapper>
	)
}
