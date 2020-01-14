import { toTest } from './tests.utils'
import {
	getSpacingOrValue,
	SpacingEnum
} from '../packages/householdjs-utils/src'

toTest('getSpacingOrValue - true', getSpacingOrValue, [true], '1rem')
toTest('getSpacingOrValue - 2rem', getSpacingOrValue, ['2rem'], '2rem')
toTest(
	'getSpacingOrValue - SpacingEnum.huge',
	getSpacingOrValue,
	[SpacingEnum.huge],
	'4rem'
)
