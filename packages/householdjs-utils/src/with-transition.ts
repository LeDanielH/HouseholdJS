import { withMs } from './with-unit'
import { oc } from 'ts-optchain'
import {
	CSSObject,
	TransitionOptions,
	WithTransitionProps
} from '@householdjs/types'

import {
	TRANSITION_DURATION_DEFAULT,
	TRANSITION_EASING_DEFAULT
} from './constants'

const defaultTransitionOptions: Required<TransitionOptions> = {
	durationInMs: TRANSITION_DURATION_DEFAULT,
	timing: TRANSITION_EASING_DEFAULT,
	willChange: false
}

export const withTransition = (
	transitionProperties: WithTransitionProps['transitionProperties'] = 'all',
	transitionOptions: WithTransitionProps['transitionOptions'] = defaultTransitionOptions,
	disableTransitions: WithTransitionProps['disableTransitions'] = false // eg. use an .env variable to disable all transitions in the project
): CSSObject => {
	if (disableTransitions) {
		return {}
	}
	const transitionedProperties: keyof CSSObject = Array.isArray(
		transitionProperties
	)
		? transitionProperties.join(',')
		: transitionProperties
	const withWillChange =
		transitionOptions.willChange && transitionedProperties

	return {
		transitionProperty: transitionedProperties as string,
		...(withWillChange && {
			willChange: transitionedProperties as string
		}),
		transitionTimingFunction: oc(transitionOptions).timing(
			defaultTransitionOptions.timing
		),
		transitionDuration: withMs(
			oc(transitionOptions).durationInMs(
				defaultTransitionOptions.durationInMs
			)
		)
	}
}
