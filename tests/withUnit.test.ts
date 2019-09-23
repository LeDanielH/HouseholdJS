import { withUnit } from '../src/utils/withUnit'
import { toTest } from './tests.utils'

toTest('withUnit - 20', withUnit, [20, 'rem'], '20rem')
