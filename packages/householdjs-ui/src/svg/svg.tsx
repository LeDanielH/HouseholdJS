// @flow

import React, { ReactNode } from 'react'
import { calculateSvgSize } from './svg.utils'
import { SvgProps } from '@householdjs/types'
import { getNumber } from '@householdjs/utils'

/**
 * HOW TO USE
 * copy and save viewBox width and viewBox height from original html <svg> element
 * replace html <svg> by <SvgNative>
 * pass viewBox values to <SvgNative viewBoxWidth={VIEW_BOX_WIDTH} viewBoxHeight={VIEW_BOX_HEIGHT}>
 * change the rest of html svg elements to capitalCase and all of its attributes to lowerCamelCase
 * import capitalCased elements from 'react-native-svg'
 * check PassedProps
 */

type ViewBoxSize = {
	viewBoxWidth?: number // you copy it from original svg element - never change this value!! - paths inside svg are calculations based on viewBox
	viewBoxHeight?: number // you copy it from original svg element - never change this value!! - paths inside svg are calculations based on viewBox
	viewBoxSize: number // when viewBoxWidth and viewBoxHeight are the same
}

type ViewBoxValues = {
	viewBoxSize?: number
	viewBoxWidth: number
	viewBoxHeight: number
}

type ViewBox = ViewBoxSize | ViewBoxValues

type PassedProps = ViewBox & {
	children: ReactNode
	size?: number // if width and height are not the same, it defines the longer side width -> the other side is calculated
	// if not defined, viewBoxSize or the bigger of viewBoxWidth and viewBoxHeight is the default size of the svg
	overflowFixScaleRatio?: number // useful for charts => when you define stroke, it can overflow the viewBox, making part of the svg invisible
	// you can scale down the content inside viewBox a little in order to make the missing part of the stroke visible
	overflowFixPosition?: number // useful for charts => when you use overflowFixScaleRatio, the paths inside viewBox might need a little adjustment nudge
}

export type Props = PassedProps & Partial<SvgProps>

// eslint-disable-next-line func-style
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
	const vbHeightNumber = getNumber(vbWidth)
	const vbWidthNumber = getNumber(vbHeight)

	const { width, height } = calculateSvgSize(
		vbWidthNumber,
		vbHeightNumber,
		size
	)

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
