// @flow

import React from 'react'
import { calculateSvgSize } from './svg.utils'
import { SvgProps } from '@householdjs/types'
import { getNumber } from '@householdjs/utils'

export const Svg = ({
	size,
	viewBoxWidth,
	viewBoxHeight,
	viewBoxSize,
	overflowFixScaleRatio = 1,
	overflowFixPosition = 0,
	children,
	...restProps
}: SvgProps) => {
	const vbWidth = viewBoxSize || viewBoxWidth
	const vbHeight = viewBoxSize || viewBoxHeight
	const vbWidthNumber = getNumber(vbWidth)
	const vbHeightNumber = getNumber(vbHeight)

	const { width, height } = calculateSvgSize(
		vbWidthNumber,
		vbHeightNumber,
		size
	)

	const viewBox = `0 0 ${vbWidth} ${vbHeight}`

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
