import { rem } from 'polished'
import { ROOT_FONT_SIZE } from './household.constants'
export const withRem = (value: number) => rem(value, ROOT_FONT_SIZE)
export const isBool = (val: any) => 'boolean' === typeof val
