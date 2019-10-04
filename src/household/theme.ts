import { withRem, ROOT_FONT_SIZE } from '../utils/withUnit'

/**
 * @ignore
 */
const SPACING = {
	baseSpacing: ROOT_FONT_SIZE
}

export type HHThemeType = typeof theme

const theme = {
	spacing: {
		...SPACING,
		tiny: withRem(SPACING.baseSpacing * 0.25),
		small: withRem(SPACING.baseSpacing * 0.5),
		default: withRem(SPACING.baseSpacing),
		big: withRem(SPACING.baseSpacing * 2),
		huge: withRem(SPACING.baseSpacing * 4)
	},
	transition: {
		easing: 'ease',
		duration: 300
	}
}

export const HHTheme: HHThemeType = theme
