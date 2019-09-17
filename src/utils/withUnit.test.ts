import { withUnit } from './withUnit'
import { toTest } from '../tests/tests.utils'

toTest('withUnit - 20', withUnit, [20, 'rem'], '20rem')
