import styled, { CSSObject } from 'styled-components'
import {
	HHFlexParentProps,
	HHPositionedProps,
	HHSpacerProps,
	HHAssignType,
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

export const HHFlexParent: HHAssignType<HHFlexParentProps, 'div'> = styled(
	'div'
)<HHFlexParentProps>(
	(props: HHFlexParentProps): CSSObject => getHHFlexParentStyles(props)
)

export const HHFlexChild: HHAssignType<HHFlexChildProps, 'div'> = styled('div')<
	HHFlexChildProps
>((props: HHFlexChildProps): CSSObject => getHHFlexChildStyles(props))

export const HHSimple: HHAssignType<HHSimpleProps, 'div'> = styled('div')<
	HHSimpleProps
>((props: HHSimpleProps): CSSObject => getHHSimpleStyles(props))

export const HHPositioned: HHAssignType<HHPositionedProps, 'div'> = styled(
	'div'
)<HHPositionedProps>(
	(props: HHPositionedProps): CSSObject => getHHPositionedStyles(props)
)

export const HHSpacer: HHAssignType<HHSpacerProps, 'div'> = styled('div')<
	HHSpacerProps
>((props: HHSpacerProps): CSSObject => getHHSpacerStyles(props))

export const HHImage: HHAssignType<HHImageProps, 'img'> = styled('img')<
	HHImageProps
>(getHHImageStyles() as CSSObject)
