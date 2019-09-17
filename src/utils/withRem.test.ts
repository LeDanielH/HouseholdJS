import { withRem } from './withRem'
import { toTest } from '../tests/tests.utils'
toTest('withRem - 20', withRem, [20], '1.25rem') // ROOT_FONT_SIZE IS 16
