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
import { RequireAtLeastOne } from '../../utils/typescript'

export const HHParent = styled('div')<HouseholdParentProps>(
	(props: HouseholdParentProps): CSSObject => getHouseholdParentProps(props)
)

export const HHChild = styled('div')<HouseholdChildProps>(
	(props: HouseholdChildProps): CSSObject => getHouseholdChildProps(props)
)

export const HHGrandParent = styled('div')<HouseholdGrandparentProps>(
	(props: HouseholdGrandparentProps): CSSObject =>
		getHouseholdGrandParentProps(props)
)

export const HHPet = styled('div')<HouseholdPetProps>(
	(props: HouseholdPetProps): CSSObject => getHouseholdPetProps(props)
)

type HHWallProps = RequireAtLeastOne<
	HouseholdWallProps,
	'top' | 'right' | 'bottom' | 'left' | 'vertical' | 'horizontal' | 'all'
>

export const HHWall = styled('div')<HHWallProps>(
	(props: HHWallProps): CSSObject => getHouseholdWallProps(props)
)
