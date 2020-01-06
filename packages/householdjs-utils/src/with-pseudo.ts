import { CSSObject } from 'styled-components'

/**
 * @ignore
 */
export const withPseudo = (
	pseudo: 'before' | 'after',
	styles?: CSSObject
): CSSObject => ({
	[`&:${pseudo}`]: {
		content: '',
		display: 'block',
		...styles
	}
})

export const withBefore = (styles?: CSSObject): CSSObject =>
	withPseudo('before', styles)

export const withAfter = (styles?: CSSObject): CSSObject =>
	withPseudo('after', styles)
