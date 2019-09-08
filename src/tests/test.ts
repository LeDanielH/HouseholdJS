import { isBool, withRem } from '../household/layout/household.utils'

const toTest = <T>(
	name: string,
	method: (params: T) => void,
	valueToTest: T,
	toBe: any
) => test(name, () => expect(method(valueToTest)).toBe(toBe))

toTest<number>('isBool - 1', isBool, 1, false)
toTest<undefined>('isBool - undefined', isBool, undefined, false)
toTest<boolean>('isBool - true', isBool, true, true)
toTest<boolean>('isBool - false', isBool, false, true)
toTest<string>('isBool - string', isBool, 'string', false)
toTest<string>('isBool - empty string', isBool, '', false)
toTest<number>('isBool - 0', isBool, 0, false)
toTest<null>('isBool - null', isBool, null, false)
toTest<number>('withRem - 20', withRem, 20, '1.25rem') // ROOT_FONT_SIZE IS 16
