import { withRem, ROOT_FONT_SIZE } from '../src/utils/withUnit'
import { toTest } from './tests.utils'
toTest('withRem - 20', withRem, [20, ROOT_FONT_SIZE], '1.25rem')
