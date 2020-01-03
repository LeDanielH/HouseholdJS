import styled, { CSSObject } from 'styled-components'
import {
	HHFlexParentProps,
	HHPositionedProps,
	HHSpacerProps,
	HHSimpleProps,
	HHImageProps,
	HHFlexChildProps
} from './household.types'
import {
	getHHFlexChildStyles,
	getHHSimpleStyles,
	getHHFlexParentStyles,
	getHHPositionedStyles,
	getHHSpacerStyles,
	getHHImageStyles
} from './household.params'

export const HHFlexParent = styled(
	'div'
)<HHFlexParentProps>(
	(props: HHFlexParentProps): CSSObject => getHHFlexParentStyles(props)
)

export const HHFlexChild = styled('div')<
	HHFlexChildProps
>((props: HHFlexChildProps): CSSObject => getHHFlexChildStyles(props))

export const HHSimple = styled('div')<
	HHSimpleProps
>((props: HHSimpleProps): CSSObject => getHHSimpleStyles(props))

export const HHPositioned = styled(
	'div'
)<HHPositionedProps>(
	(props: HHPositionedProps): CSSObject => getHHPositionedStyles(props)
)

export const HHSpacer = styled('div')<
	HHSpacerProps
>((props: HHSpacerProps): CSSObject => getHHSpacerStyles(props))

export const HHImage = styled('img')<
	HHImageProps
>(getHHImageStyles())
