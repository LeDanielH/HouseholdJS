import styled from 'styled-components'
import { SimpleWrapper } from '@householdjs/elements'
import { DropdownStyledProps } from './dropdown.types'
import { CLASS_IS_OPEN } from '../constants'
import { pxToRem, withTransition } from '@householdjs/utils'

/**
 * @ignore
 */
export const DropdownStyled = styled(SimpleWrapper)<DropdownStyledProps>(
	({ maxHeight }: DropdownStyledProps) => ({
		overflow: 'hidden',
		pointerEvents: 'none',
		maxHeight: 0,
		[`&.${CLASS_IS_OPEN}`]: {
			pointerEvents: 'auto',
			maxHeight: pxToRem(maxHeight)
		},
		...withTransition('max-height')
	})
)
