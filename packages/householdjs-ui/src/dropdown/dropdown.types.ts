import { SimpleWrapperProps } from 'householdjs'
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
