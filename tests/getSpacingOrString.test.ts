import { toTest } from './tests.utils'
import { getSpacingOrValue } from '../packages/utils/src'

toTest('getSpacingOrValue - boolean true', getSpacingOrValue, [true], '1rem')
toTest('getSpacingOrValue - 2rem', getSpacingOrValue, ['2rem'], '2rem')
