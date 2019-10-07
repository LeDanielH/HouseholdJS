import { CSSObject } from 'styled-components'

/**
 * @ignore
 */
export type UnitType = 'px' | 'em' | 'rem' | 'ms' | 's' | 'deg' | '%' // todo add more units if needed
export type HHExtractNumberAndUnitType = [number, string]

export interface HHTransitionOptions {
	timing?: CSSObject['transitionTimingFunction']
	durationInMs?: number
}

export enum HHSpacingEnum {
	huge = 'huge',
	big = 'big',
	default = 'default',
	small = 'small',
	tiny = 'tiny'
}
