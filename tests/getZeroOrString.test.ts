import { toTest } from './tests.utils'
import { getZeroOrValue } from '../packages/householdjs-utils/src'

toTest('getZeroOrValue - true boolean', getZeroOrValue, [true], 0) // ROOT_FONT_SIZE IS 16
toTest('getZeroOrValue - string 20%', getZeroOrValue, ['20%'], '20%') // ROOT_FONT_SIZE IS 16
