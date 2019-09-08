import {SpacingSizesEnum} from "./household.types";
import {withRem} from "../styling";

const BASE_SPACING = 1;
export const SizesMap = {
	[SpacingSizesEnum.tiny]: withRem(BASE_SPACING * 0.25),
	[SpacingSizesEnum.small]: withRem(BASE_SPACING * 0.5),
	[SpacingSizesEnum.default]: withRem(BASE_SPACING),
	[SpacingSizesEnum.big]: withRem(BASE_SPACING * 2),
	[SpacingSizesEnum.huge]: withRem(BASE_SPACING * 4),
};
