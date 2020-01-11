import { toTest } from './tests.utils'
import { withUnit } from '../packages/householdjs-utils/src'

toTest('withUnit - 20', withUnit, [20, 'rem'], '20rem')
