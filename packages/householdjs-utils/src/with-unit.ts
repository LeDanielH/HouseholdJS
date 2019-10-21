import { UnitType } from './types'

/**
 * @ignore
 */
export const withUnit = (value: number, unit: UnitType): string =>
	`${value}${unit}`

/**
 * @ignore
 */
export const withRem = (value: number): string => withUnit(value, 'rem')

/**
 * @ignore
 */
export const withPx = (value: number): string => withUnit(value, 'px')

/**
 * @ignore
 */
export const withMs = (value: number): string => withUnit(value, 'ms')

/**
 * @ignore
 */
export const withDeg = (value: number): string => withUnit(value, 'deg')

/**
 * @ignore
 */
export const withPercent = (value: number): string => withUnit(value, '%')