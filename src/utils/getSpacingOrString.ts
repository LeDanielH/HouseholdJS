import { HHSpacingSizesEnum } from '..'
import { SizesMap } from '../household/layout/household.constants'
import { isBool } from './isBool'

export const getSpacingOrString = (
	val: boolean | string,
	spacing: HHSpacingSizesEnum
): string => (isBool(val) ? SizesMap[spacing] : (val as string))
