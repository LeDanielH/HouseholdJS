import { HHSpacing } from '@householdjs/utils'

export type HHThemeType = typeof householdTheme

const householdTheme = {
	spacing: HHSpacing,
	transition: {
		easing: 'ease',
		duration: 300
	}
}

export const HHTheme: HHThemeType = householdTheme
