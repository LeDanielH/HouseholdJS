import styled, { CSSObject } from 'styled-components'
import {
	HHChildProps,
	HHGrandparentProps,
	HHWindowProps,
	HHParentProps,
	HHPetProps,
	HHWallProps
} from './household.types'
import {
	getHHChildStyles,
	getHHGrandparentStyles,
	getHHParentStyles,
	getHHPetStyles,
	getHHWallStyles,
	getHHWindowStyles
} from './household.params'

export const HHParent = styled('div')<HHParentProps>(
	(props: HHParentProps): CSSObject => getHHParentStyles(props)
)

export const HHChild = styled('div')<HHChildProps>(
	(props: HHChildProps): CSSObject => getHHChildStyles(props)
)

export const HHGrandParent = styled('div')<HHGrandparentProps>(
	(props: HHGrandparentProps): CSSObject => getHHGrandparentStyles(props)
)

export const HHSimple = HHGrandParent

export const HHPet = styled('div')<HHPetProps>(
	(props: HHPetProps): CSSObject => getHHPetStyles(props)
)

export const HHPositioned = HHPet

export const HHWall = styled('div')<HHWallProps>(
	(props: HHWallProps): CSSObject => getHHWallStyles(props)
)

export const HHSpacer = HHWall

export const HHWindow = styled('img')<HHWindowProps>(
	getHHWindowStyles() as CSSObject
)

export const HHImage = HHWindow
