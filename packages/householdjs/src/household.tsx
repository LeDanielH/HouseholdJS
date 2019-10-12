import { PureComponent } from 'react'
import {
	HHParent,
	HHChild,
	HHGrandParent,
	HHPet,
	HHWall,
	HHPositioned,
	HHSimple,
	HHSpacer,
	HHWindow,
	HHImage,
	HHFlexParent,
	HHFlexChild
} from './household.styled'

import {
	HHAssignType,
	HHChildProps,
	HHGrandparentProps,
	HHImageProps,
	HHParentProps,
	HHPositionedProps,
	HHSimpleProps,
	HHSpacerProps,
	HHWallProps,
	HHWindowProps,
	HHPetProps,
	HHFlexChildProps,
	HHFlexParentProps
} from './household.types'

export class HH extends PureComponent {
	static Parent: HHAssignType<HHParentProps, 'div'> = HHParent
	static Child: HHAssignType<HHChildProps, 'div'> = HHChild
	static FlexParent: HHAssignType<HHFlexParentProps, 'div'> = HHFlexParent
	static FlexChild: HHAssignType<HHFlexChildProps, 'div'> = HHFlexChild
	static GrandParent: HHAssignType<HHGrandparentProps, 'div'> = HHGrandParent
	static Pet: HHAssignType<HHPetProps, 'div'> = HHPet
	static Wall: HHAssignType<HHWallProps, 'div'> = HHWall
	static Spacer: HHAssignType<HHSpacerProps, 'div'> = HHSpacer
	static Positioned: HHAssignType<HHPositionedProps, 'div'> = HHPositioned
	static Simple: HHAssignType<HHSimpleProps, 'div'> = HHSimple
	static Window: HHAssignType<HHWindowProps, 'img'> = HHWindow
	static Image: HHAssignType<HHImageProps, 'img'> = HHImage
}
