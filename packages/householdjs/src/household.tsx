import { PureComponent } from 'react'
import {
	HHFlexParent,
	HHFlexChild,
	HHSimple,
	HHPositioned,
	HHSpacer,
	HHImage
} from './household.styled'

import {
	HHAssignType,
	HHSimpleProps,
	HHSpacerProps,
	HHImageProps,
	HHPositionedProps,
	HHFlexChildProps,
	HHFlexParentProps
} from './household.types'

export class HH extends PureComponent {
	static FlexParent: HHAssignType<HHFlexParentProps, 'div'> = HHFlexParent
	static FlexChild: HHAssignType<HHFlexChildProps, 'div'> = HHFlexChild
	static Spacer: HHAssignType<HHSpacerProps, 'div'> = HHSpacer
	static Positioned: HHAssignType<HHPositionedProps, 'div'> = HHPositioned
	static Simple: HHAssignType<HHSimpleProps, 'div'> = HHSimple
	static Image: HHAssignType<HHImageProps, 'img'> = HHImage
}
