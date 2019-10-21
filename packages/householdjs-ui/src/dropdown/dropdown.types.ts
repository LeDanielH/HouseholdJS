import { HHSimpleProps } from 'householdjs'
import { DropdownProps, DropdownState } from './dropdown'

export type DropdownStyledProps = Omit<
	DropdownProps,
	'checkDOMUpdate' | 'isOpen' | 'maxHeightDefined'
> &
	DropdownState &
	HHSimpleProps
