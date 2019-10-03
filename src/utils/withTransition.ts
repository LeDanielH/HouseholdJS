import { withUnit } from './withUnit'
import { oc } from 'ts-optchain'
import { HHTheme } from '../household/theme'
import { CSSObject } from 'styled-components'
import { HHTransitionOptions } from '../types'

export const withTransition = (
	transitionProperties: Array<keyof CSSObject> | keyof CSSObject,
	transitionOptions?: HHTransitionOptions,
	disableTransitions = false // eg. use an .env variable to disable all transitions in the project
): CSSObject => {
	if (disableTransitions) {
		return {}
	}
	const transitionedProperties: keyof CSSObject | string = Array.isArray(
		transitionProperties
	)
		? transitionProperties.join(',')
		: transitionProperties
	return {
		transitionProperty: (transitionedProperties || 'all') as string,
		...(transitionedProperties && {
			willChange: transitionedProperties as string
		}),
		transitionTimingFunction: oc(transitionOptions).timing(
			HHTheme.transition.easing
		),
		transitionDuration: withUnit(
			oc(transitionOptions).durationInMs(HHTheme.transition.duration),
			'ms'
		)
	}
}
