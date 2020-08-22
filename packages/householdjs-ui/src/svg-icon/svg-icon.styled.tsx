import { SvgIconWrapperProps } from './svg-icon.types.ts'
import styled from 'styled-components'
import {
	getRotationBasedOnPointingTo,
	pxToRem,
	withDeg
} from '@householdjs/utils'
import { size as sizePolished } from 'polished'

export const SvgIconWrapper = styled('i')<SvgIconWrapperProps>(
	({ pointingTo, withPointer, size }: SvgIconWrapperProps) => ({
		display: 'inline-flex',
		justifyContent: 'center',
		alignItems: 'center',
		fontSize: 0,
		...(pointingTo
			? {
					transform: `rotate(${withDeg(
						getRotationBasedOnPointingTo(pointingTo)
					)})`
			  }
			: {}),
		...(withPointer
			? {
					cursor: 'pointer'
			  }
			: {}),
		...sizePolished(pxToRem(size)),
		svg: {
			display: 'inline-block',
			maxWidth: pxToRem(size),
			flex: `0 0 ${pxToRem(size)}`
		}
	})
)
