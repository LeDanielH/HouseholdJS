import { SvgIconWrapperProps } from './svg-icon.types'
import styled from 'styled-components'
import {
	getRotationBasedOnPointingTo,
	pxToRem,
	withDeg
} from '@householdjs/utils'
import { size as sizePolished } from 'polished'
import { CSSObject } from '@householdjs/types'
import { getFlexChildStyles, getFlexParentStyles } from '@householdjs/elements'

export const SvgIconWrapper = styled('i')<SvgIconWrapperProps>(
	({
		pointingTo,
		withPointer,
		size,
		onClick
	}: SvgIconWrapperProps): CSSObject => ({
		...getFlexParentStyles({
			isInline: true,
			justifyContent: 'center',
			alignItems: 'center',
			noFontSize: true,
			onClick,
			withPointer,
		}),
		...(pointingTo
			? {
					transform: `rotate(${withDeg(
						getRotationBasedOnPointingTo(pointingTo)
					)})`
			  }
			: {}),
		...sizePolished(pxToRem(size)),
		svg: {
			...getFlexChildStyles({
				flexBasis: pxToRem(size),
				withIe: true,
			})
		}
	})
)
