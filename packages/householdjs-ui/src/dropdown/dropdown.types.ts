import { SimpleWrapperProps } from '@householdjs/types'
import { DropdownProps, DropdownState } from './dropdown'

/**
 * @ignore
 */
export type DropdownStyledProps = Omit<
	DropdownProps,
	'checkDOMUpdate' | 'isOpen' | 'maxHeightDefined'
> &
	DropdownState &
	SimpleWrapperProps
