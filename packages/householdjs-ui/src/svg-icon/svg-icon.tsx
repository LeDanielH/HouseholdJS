import React from 'react'
import { SvgIconWrapper } from './svg-icon.styled'
import { Svg } from '@householdjs/elements'
import type { SvgIconProps } from './svg-icon.types.ts'

export const SvgIcon = ({
	direction,
	withPointer,
	size,
	viewBoxWidth,
	viewBoxHeight,
	children,
	...restProps
}: SvgIconProps) => {
	return (
		<SvgIconWrapper
			direction={direction}
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
