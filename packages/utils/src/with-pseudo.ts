import { CSSObject } from 'styled-components'


export const withPseudo = (styles: CSSObject, pseudo: 'before' | 'after'): CSSObject => ({
	[`&:${pseudo}`]: {
		content: '',
		display: 'block',
		...styles
	}
})


export const withBefore = (styles: CSSObject): CSSObject => withPseudo(styles, 'before');

export const withAfter = (styles: CSSObject): CSSObject => withPseudo(styles, 'after');
