import { mathAnimations, MathAnimationsEnum } from './scroll-to.animations'
import { TRANSITION_DURATION_DEFAULT } from './constants'

type ScrollToParamsType = {
	parent: HTMLElement
	childOffset: number
	duration?: number
	animation?: MathAnimationsEnum
}

export function scrollTo({
	parent,
	childOffset,
	duration = TRANSITION_DURATION_DEFAULT,
	animation = MathAnimationsEnum.easeInOutQuad
}: ScrollToParamsType) {
	const start = parent.scrollTop
	const change = childOffset - start
	let currentTime = 0
	const increment = 20

	const animateScroll = () => {
		currentTime += increment
		parent.scrollTop = mathAnimations[animation](
			currentTime,
			start,
			change,
			duration
		)

		if (currentTime < duration) {
			setTimeout(animateScroll, increment)
		}
	}

	animateScroll()
}
