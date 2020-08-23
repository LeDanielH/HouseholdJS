import { round } from './numbers-mod.ts'

export const SVG_MAX_PRECISION = 0.01

export type TCalculateSizeReturn = {
	width: number
	height: number
}

/**
 * for svgs/images/icons with uneven width and height
 * can't increase width without properly adjusting height to keep the sides ratio
 * enables us to set svg-icon size prop - it calculates the shorter side based on the sizeWeDefined
 * @param {number} sizeWeDefined - how big do we want the longest side to be
 * @param {number} width - original width (viewBoxWidth in Svg)
 * @param {number} height - original height (viewBoxHeight in Svg)
 * @returns {{width: *, height: number}|{width: number, height: *}|{width: number, height: number}}
 */
export const calculateSize = (
	width: number,
	height: number,
	sizeWeDefined?: number
): TCalculateSizeReturn => {
	if (typeof sizeWeDefined === 'number') {
		if (height !== width) {
			const maxSize = Math.max(width, height)
			const minSize = Math.min(width, height)
			const shorterSideCalculatedSize =
				sizeWeDefined / (maxSize / minSize)
			const shorterSideCalculatedSizeRounded = round(
				shorterSideCalculatedSize,
				SVG_MAX_PRECISION
			)

			if (height > width) {
				return {
					width: shorterSideCalculatedSizeRounded,
					height: sizeWeDefined
				}
			} else {
				return {
					width: sizeWeDefined,
					height: shorterSideCalculatedSizeRounded
				}
			}
		}

		return {
			width: sizeWeDefined,
			height: sizeWeDefined
		}
	}

	return {
		width,
		height
	}
}
