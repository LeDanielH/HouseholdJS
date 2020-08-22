// @flow

import React from 'react'
import { SvgProps } from '@householdjs/types'
import { getSvgParams } from '../household.params'

export const Svg = (props: SvgProps) => {
	const {
		width,
		height,
		viewBox,
		overflowFixScaleRatio,
		overflowFixPosition,
		children,
		...restProps
	} = getSvgParams(props)

	return (
		<svg
			width={width}
			height={height}
			viewBox={viewBox}
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			preserveAspectRatio="xMidYMid meet"
			{...restProps}
		>
			<g
				fill="none"
				transform={`scale(${overflowFixScaleRatio} ${overflowFixScaleRatio})`}
			>
				<g
					transform={`translate(${overflowFixPosition} ${overflowFixPosition})`}
				>
					{children}
				</g>
			</g>
		</svg>
	)
}
