import styled, { CSSObject } from 'styled-components'
import {
	HHChildProps,
	HHGrandparentProps,
	HHWindowProps,
	HHParentProps,
	HHPetProps,
	HHWallProps,
	HHAssignType,
	HHSimpleProps,
	HHPositionedProps,
	HHSpacerProps,
	HHImageProps,
	HHFlexParentProps,
	HHFlexChildProps
} from './household.types'
import {
	getHHChildStyles,
	getHHGrandparentStyles,
	getHHParentStyles,
	getHHPetStyles,
	getHHWallStyles,
	getHHWindowStyles
} from './household.params'

export const HHParent: HHAssignType<HHParentProps, 'div'> = styled('div')<
	HHParentProps
>((props: HHParentProps): CSSObject => getHHParentStyles(props))

export const HHFlexParent: HHAssignType<HHFlexParentProps, 'div'> = HHParent

export const HHChild: HHAssignType<HHChildProps, 'div'> = styled('div')<
	HHChildProps
>((props: HHChildProps): CSSObject => getHHChildStyles(props))

export const HHFlexChild: HHAssignType<HHFlexChildProps, 'div'> = HHChild

export const HHGrandParent: HHAssignType<HHGrandparentProps, 'div'> = styled(
	'div'
)<HHGrandparentProps>(
	(props: HHGrandparentProps): CSSObject => getHHGrandparentStyles(props)
)

export const HHSimple: HHAssignType<HHSimpleProps, 'div'> = HHGrandParent

export const HHPet: HHAssignType<HHPetProps, 'div'> = styled('div')<HHPetProps>(
	(props: HHPetProps): CSSObject => getHHPetStyles(props)
)

export const HHPositioned: HHAssignType<HHPositionedProps, 'div'> = HHPet

export const HHWall: HHAssignType<HHWallProps, 'div'> = styled('div')<
	HHWallProps
>((props: HHWallProps): CSSObject => getHHWallStyles(props))

export const HHSpacer: HHAssignType<HHSpacerProps, 'div'> = HHWall

export const HHWindow: HHAssignType<HHWindowProps, 'img'> = styled('img')<
	HHWindowProps
>(getHHWindowStyles() as CSSObject)

export const HHImage: HHAssignType<HHImageProps, 'img'> = HHWindow
