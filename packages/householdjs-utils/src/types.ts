import { CSSObject } from 'styled-components'

/**
 * @ignore
 */
export type UnitType = 'px' | 'em' | 'rem' | 'ms' | 's' | 'deg' | '%' // todo add more units if needed

/**
 * @ignore
 */
export type HHExtractNumberAndUnitType = [number, string]

/**
 * @ignore
 */
export interface HHTransitionOptions {
	timing?: CSSObject['transitionTimingFunction']
	durationInMs?: number
	willChange?: boolean
}

/**
 * @ignore
 */
export enum SpacingEnum {
	huge = 'huge',
	big = 'big',
	default = 'default',
	small = 'small',
	tiny = 'tiny'
}
