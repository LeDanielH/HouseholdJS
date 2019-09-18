import { getSpacingOrString } from './getSpacingOrString'
import { toTest } from '../tests/tests.utils'

toTest('getSpacingOrString - boolean true', getSpacingOrString, [true], '1rem')
toTest('getSpacingOrString - 2rem', getSpacingOrString, ['2rem'], '2rem')
