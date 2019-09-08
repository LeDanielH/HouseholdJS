import styled, { CSSObject } from 'styled-components'
import {
	HouseholdChildProps,
	HouseholdGrandparentProps,
	HouseholdParentProps,
	HouseholdPetProps,
	HouseholdWallProps
} from './household.types'
import {
	getHouseholdChildProps,
	getHouseholdGrandParentProps,
	getHouseholdParentProps,
	getHouseholdPetProps,
	getHouseholdWallProps
} from './household.params'

export const HHParent = styled('div')<HouseholdParentProps>(
	(props: HouseholdParentProps) => getHouseholdParentProps(props) as CSSObject
)

export const HHChild = styled('div')<HouseholdChildProps>(
	(props: HouseholdChildProps) => getHouseholdChildProps(props) as CSSObject
)

export const HHGrandParent = styled('div')<HouseholdGrandparentProps>(
	(props: HouseholdGrandparentProps) =>
		getHouseholdGrandParentProps(props) as CSSObject
)

export const HHPet = styled('div')<HouseholdPetProps>(
	(props: HouseholdPetProps) => getHouseholdPetProps(props) as CSSObject
)

export const HHWall = styled('div')<HouseholdWallProps>(
	(props: HouseholdWallProps) => getHouseholdWallProps(props) as CSSObject
)
