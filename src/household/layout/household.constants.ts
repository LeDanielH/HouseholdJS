import { HHSpacingSizesEnum } from './household.types'
import { withRem } from '../../utils/withRem'

const BASE_SPACING = 16 // px value
type SizeMapType = { [key: string]: string }

export const SizesMap: SizeMapType = {
	[HHSpacingSizesEnum.tiny]: withRem(BASE_SPACING * 0.25),
	[HHSpacingSizesEnum.small]: withRem(BASE_SPACING * 0.5),
	[HHSpacingSizesEnum.default]: withRem(BASE_SPACING),
	[HHSpacingSizesEnum.big]: withRem(BASE_SPACING * 2),
	[HHSpacingSizesEnum.huge]: withRem(BASE_SPACING * 4)
}
