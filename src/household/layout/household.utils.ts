import { SizesMap } from './household.constants'
import { SpacingSizesEnum } from './household.types'
import { UnitType } from '../../utils/typescript'
export const ROOT_FONT_SIZE = 16
export const withUnit = (value: number, unit: UnitType): string =>
	`${value}${unit}`
export const withRem = (value: number): string =>
	withUnit(value / ROOT_FONT_SIZE, 'rem')
export const isBool = (val: any): boolean => 'boolean' === typeof val
export const getZeroOrString = (val: boolean | string): number | string =>
	isBool(val) ? 0 : (val as string)
export const getSpacingOrString = (
	val: boolean | string,
	spacing: SpacingSizesEnum
): string => (isBool(val) ? SizesMap[spacing] : (val as string))
