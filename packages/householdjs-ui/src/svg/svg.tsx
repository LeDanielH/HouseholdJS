// @flow

import React, { ReactNode } from 'react'
import { calculateSvgSize } from './svg.utils'
import { SvgProps } from '@householdjs/types'

type ViewBoxSize = {
	viewBoxSize: number
}

type ViewBoxValues = {
	viewBoxWidth: number
	viewBoxHeight: number
}

type ViewBox = ViewBoxSize | ViewBoxValues

type PassedProps = ViewBox & {
	children: ReactNode
	size?: number
	overflowFixScaleRatio?: number
	overflowFixPosition?: number
}

export type Props = PassedProps & Partial<SvgProps>

export const Svg = ({
	size,
	viewBoxWidth,
	viewBoxHeight,
	viewBoxSize,
	overflowFixScaleRatio = 1,
	overflowFixPosition = 0,
	children,
	...restProps
}: Props) => {
	const vbWidth = viewBoxSize || viewBoxWidth
	const vbHeight = viewBoxSize || viewBoxHeight

	const { width, height } = calculateSvgSize(vbWidth, vbHeight, size)

	const viewBox = `0 0 ${vbWidth} ${vbHeight}`

	return (
		<svg width={width} height={height} viewBox={viewBox} {...restProps}>
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
