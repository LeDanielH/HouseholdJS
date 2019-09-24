import { UnitType } from './types'

/**
 * @ignore
 */
export const withUnit = (value: number, unit: UnitType): string =>
	`${value}${unit}`
