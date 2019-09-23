import { withRem } from '../utils/withRem'

const SPACING = {
	baseSpacing: 16
}

type HHThemeType = typeof theme

const theme = {
	spacing: {
		...SPACING,
		tiny: withRem(SPACING.baseSpacing * 0.25),
		small: withRem(SPACING.baseSpacing * 0.5),
		default: withRem(SPACING.baseSpacing),
		big: withRem(SPACING.baseSpacing * 2),
		huge: withRem(SPACING.baseSpacing * 4)
	}
}

export const HHTheme: HHThemeType = theme
