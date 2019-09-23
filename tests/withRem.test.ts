import { withRem } from '../src/utils/withRem'
import { toTest } from './tests.utils'
toTest('withRem - 20', withRem, [20], '1.25rem') // ROOT_FONT_SIZE IS 16
