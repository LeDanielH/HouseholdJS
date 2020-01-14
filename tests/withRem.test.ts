import { toTest } from './tests.utils'
import { pxToRem } from '../packages/householdjs-utils/src'
import { ROOT_FONT_SIZE } from '../packages/householdjs-utils/src/constants'

toTest('pxToRem - 20', pxToRem, [20, ROOT_FONT_SIZE], '1.25rem')
