import { toTest } from '../tests/tests.utils'
import { getZeroOrString } from './getZeroOrString'

toTest('getZeroOrString - true boolean', getZeroOrString, [true], 0) // ROOT_FONT_SIZE IS 16
toTest('getZeroOrString - string 20%', getZeroOrString, ['20%'], '20%') // ROOT_FONT_SIZE IS 16
