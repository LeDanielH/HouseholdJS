import { CSSObject } from 'styled-components'

export type UnitType = 'px' | 'em' | 'rem' | 'ms' | 's' | 'deg' | '%' // todo add more units if needed

/**
 * @ignore
 */
export type ExtractNumberAndUnitType = [number, string]

export interface TransitionOptions {
	timing?: CSSObject['transitionTimingFunction']
	durationInMs?: number
	willChange?: boolean
}

export type TransitionPropertiesType = Array<keyof CSSObject> | keyof CSSObject

export interface WithTransitionProps {
	transitionProperties: TransitionPropertiesType
	transitionOptions: TransitionOptions
	disableTransitions: boolean
}

export type WithTransitionPropType = Partial<WithTransitionProps> | true

export enum SpacingEnum {
	huge = 'huge',
	big = 'big',
	default = 'default',
	small = 'small',
	tiny = 'tiny'
}
