import styled, { CSSObject } from 'styled-components'
import {
	HHChildProps,
	HHGrandparentProps,
	HHParentProps,
	HHPetProps,
	HHWallProps
} from './household.types'
import {
	getHHChildProps,
	getHHGrandparentProps,
	getHHParentProps,
	getHHPetProps,
	getHHWallProps
} from './household.params'

export const HHParent = styled('div')<HHParentProps>(
	(props: HHParentProps): CSSObject => getHHParentProps(props)
)

export const HHChild = styled('div')<HHChildProps>(
	(props: HHChildProps): CSSObject => getHHChildProps(props)
)

export const HHGrandParent = styled('div')<HHGrandparentProps>(
	(props: HHGrandparentProps): CSSObject => getHHGrandparentProps(props)
)

export const HHPet = styled('div')<HHPetProps>(
	(props: HHPetProps): CSSObject => getHHPetProps(props)
)

export const HHWall = styled('div')<HHWallProps>(
	(props: HHWallProps): CSSObject => getHHWallProps(props)
)
