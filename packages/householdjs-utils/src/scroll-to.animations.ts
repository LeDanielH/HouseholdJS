export enum MathAnimationsEnum {
	easeInOutQuad = 'easeInOutQuad',
	easeInOutCubic = 'easeInOutCubic',
	easeInOutSine = 'easeInOutSine'
}

type MathAnimationsType = {
	[MathAnimationsEnum.easeInOutQuad]: (
		currentTime: number,
		start: number,
		change: number,
		duration: number
	) => number
	[MathAnimationsEnum.easeInOutCubic]: (
		currentTime: number,
		start: number,
		change: number,
		duration: number
	) => number
	[MathAnimationsEnum.easeInOutSine]: (
		currentTime: number,
		start: number,
		change: number,
		duration: number
	) => number
}

export const mathAnimations: MathAnimationsType = {
	// took easing functions from here http://easings.net/
	// copied easing code from here http://gsgd.co.uk/sandbox/jquery/easing/jquery.easing.1.3.js

	[MathAnimationsEnum.easeInOutQuad]: (t, b, c, d) =>
		// eslint-disable-next-line
		(t /= d / 2) < 1
			? (c / 2) * t * t + b
			: (-c / 2) * (--t * (t - 2) - 1) + b,
	[MathAnimationsEnum.easeInOutCubic]: (t, b, c, d) =>
		// eslint-disable-next-line
		(t /= d / 2) < 1
			? (c / 2) * t * t * t + b
			: (c / 2) * ((t -= 2) * t * t + 2) + b,
	[MathAnimationsEnum.easeInOutSine]: (t, b, c, d) =>
		// eslint-disable-next-line
		(-c / 2) * (Math.cos((Math.PI * t) / d) - 1) + b
}
