import { withMs } from './with-unit'
import { oc } from 'ts-optchain'
import { CSSObject } from 'styled-components'
import { HHTransitionOptions } from './types'
import {
	TRANSITION_DURATION_DEFAULT,
	TRANSITION_EASING_DEFAULT
} from './constants'

/**
 * @ignore
 */
const defaultTransitionOptions: Required<HHTransitionOptions> = {
	durationInMs: TRANSITION_DURATION_DEFAULT,
	timing: TRANSITION_EASING_DEFAULT
}

export const withTransition = (
	transitionProperties: Array<keyof CSSObject> | keyof CSSObject,
	transitionOptions: HHTransitionOptions = defaultTransitionOptions,
	disableTransitions = false // eg. use an .env variable to disable all transitions in the project
): CSSObject => {
	if (disableTransitions) {
		return {}
	}
	const transitionedProperties: keyof CSSObject = Array.isArray(
		transitionProperties
	)
		? transitionProperties.join(',')
		: transitionProperties
	return {
		transitionProperty: transitionedProperties as string,
		...(transitionedProperties && {
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
