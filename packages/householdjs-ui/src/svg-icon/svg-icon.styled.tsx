import { SvgIconWrapperProps } from './svg-icon.types.ts'
import styled from 'styled-components'
import {
	getRotationBasedOnDirection,
	pxToRem,
	withDeg
} from '@householdjs/utils'
import { size as sizePolished } from 'polished'

export const SvgIconWrapper = styled('i')<SvgIconWrapperProps>(
	({ direction, withPointer, size }: SvgIconWrapperProps) => ({
		display: 'inline-flex',
		justifyContent: 'center',
		alignItems: 'center',
		fontSize: 0,
		...(direction
			? {
					transform: `rotate(${withDeg(
						getRotationBasedOnDirection(direction)
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
