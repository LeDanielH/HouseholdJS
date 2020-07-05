// @flow
/* eslint-disable func-style */
import { round } from '@householdjs/utils'

export const SVG_MAX_PRECISION = 0.01;

export type TCalculateSvgSizeReturn = {
	width: number,
	height: number,
};

// eslint-disable-next-line valid-jsdoc
/**
 * for svgs with uneven width and height
 * can't increase width without properly adjusting height to keep the sides ratio
 * enables us to set svg size prop - it calculates the shorter side based on the sizeWeDefined
 * @param {number} sizeWeDefined - how big do we want the longest side to be
 * @param {number} viewBoxWidth - that the svg was exported with
 * @param {number} viewBoxHeight - that the svg was exported with
 * @returns {{width: *, height: number}|{width: number, height: *}|{width: number, height: number}}
 */
export const calculateSvgSize = (
	viewBoxWidth: number,
	viewBoxHeight: number,
	sizeWeDefined?: number,
): TCalculateSvgSizeReturn => {
	if (typeof sizeWeDefined === 'number') {
		if (viewBoxHeight !== viewBoxWidth) {
			const maxSize = Math.max(viewBoxWidth, viewBoxHeight);
			const minSize = Math.min(viewBoxWidth, viewBoxHeight);
			const shorterSideCalculatedSize = sizeWeDefined / (maxSize / minSize);
			const shorterSideCalculatedSizeRounded = round(shorterSideCalculatedSize, SVG_MAX_PRECISION);

			if (viewBoxHeight > viewBoxWidth) {
				return {
					width: shorterSideCalculatedSizeRounded,
					height: sizeWeDefined,
				};
			} else {
				return {
					width: sizeWeDefined,
					height: shorterSideCalculatedSizeRounded,
				};
			}
		}

		return {
			width: sizeWeDefined,
			height: sizeWeDefined,
		};
	}

	if(viewBoxWidth === 0) {
		throw new Error('viewBoxWidth cannot be 0')
	}

	if(viewBoxHeight === 0) {
		throw new Error('viewBoxHeight cannot be 0')
	}


	return {
		width: viewBoxWidth,
		height: viewBoxHeight,
	};

};
