import { toTest } from './tests.utils'
import { getSpacingOrValue, Spacing } from '../packages/householdjs-utils/src'

toTest('getSpacingOrValue - true', getSpacingOrValue, [true], '1rem')
toTest('getSpacingOrValue - 2rem', getSpacingOrValue, ['2rem'], '2rem')
toTest(
	'getSpacingOrValue - SpacingEnum.big',
	getSpacingOrValue,
	[Spacing.big],
	'2rem'
)
