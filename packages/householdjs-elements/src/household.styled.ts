import styled, { CSSObject } from 'styled-components'

import {
	FlexParentProps,
	PositionedProps,
	SpacerProps,
	SimpleWrapperProps,
	ImageProps,
	FlexChildProps
} from '@householdjs/types'
import {
	getFlexChildStyles,
	getSimpleWrapperStyles,
	getFlexParentStyles,
	getPositionedStyles,
	getSpacerStyles,
	getImageStyles
} from './household.params'

export const FlexParent = styled('div')<FlexParentProps>(
	(props: FlexParentProps): CSSObject => getFlexParentStyles(props)
)

export const FlexChild = styled('div')<FlexChildProps>(
	(props: FlexChildProps): CSSObject => getFlexChildStyles(props)
)

export const SimpleWrapper = styled('div')<SimpleWrapperProps>(
	(props: SimpleWrapperProps): CSSObject => getSimpleWrapperStyles(props)
)

export const Positioned = styled('div')<PositionedProps>(
	(props: PositionedProps): CSSObject => getPositionedStyles(props)
)

export const Spacer = styled('div')<SpacerProps>(
	(props: SpacerProps): CSSObject => getSpacerStyles(props)
)

export const Image = styled('img')<ImageProps>((props: ImageProps) =>
	getImageStyles(props)
)
