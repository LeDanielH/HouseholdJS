import { UnitType } from '@householdjs/types'

/**
 * @ignore
 */
export const withUnit = (value: number, unit: UnitType): string =>
	`${value}${unit}`
export const withRem = (value: number): string => withUnit(value, 'rem')
export const withPx = (value: number): string => withUnit(value, 'px')
export const withMs = (value: number): string => withUnit(value, 'ms')
export const withDeg = (value: number): string => withUnit(value, 'deg')
export const withPercent = (value: number): string => withUnit(value, '%')
