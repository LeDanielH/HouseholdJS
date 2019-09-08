import { rem } from 'polished'
export const ROOT_FONT_SIZE = 16
export const withRem = (value: number) => rem(value, ROOT_FONT_SIZE)
export const isBool = (val: any) => 'boolean' === typeof val
