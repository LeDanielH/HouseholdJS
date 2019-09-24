import { HHSpacingSizesEnum } from '..'
import { isBool } from './isBool'
import { HHTheme } from '../household/theme'

/**
 * @ignore
 */
export const getSpacingOrString = (
	val: boolean | string,
	spacing: HHSpacingSizesEnum = HHSpacingSizesEnum.default
): string => (isBool(val) ? HHTheme.spacing[spacing] : (val as string))
