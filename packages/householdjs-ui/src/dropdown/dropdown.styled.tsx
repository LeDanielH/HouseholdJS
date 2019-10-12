import React from 'react'
import styled from 'styled-components'
import { HHSimple, HHSimpleProps } from '@householdjs/layout'
import { DropdownStyledProps } from './dropdown.types'
import { CLASS_IS_OPEN } from '../constants'
import { pxToRem, withTransition } from '@householdjs/utils'

export const DropdownStyled = styled(({ ...rest }: HHSimpleProps) => (
	<HHSimple {...rest} />
))<DropdownStyledProps>(({ maxHeight }: DropdownStyledProps) => ({
	overflow: 'hidden',
	pointerEvents: 'none',
	maxHeight: 0,
	[`&.${CLASS_IS_OPEN}`]: {
		pointerEvents: 'auto',
		maxHeight: pxToRem(maxHeight)
	},
	...withTransition('max-height')
}))
