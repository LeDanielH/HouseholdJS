import { UnitType } from './types'
export const withUnit = (value: number, unit: UnitType): string =>
	`${value}${unit}`
