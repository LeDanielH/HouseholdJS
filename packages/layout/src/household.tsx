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
	HHImage
} from './household.styled'
import { HHConsumer, HHProvider } from './household.context'
import {
	HHAssignType,
	HHChildProps,
	HHGrandparentProps, HHImageProps,
	HHParentProps, HHPositionedProps, HHSimpleProps,
	HHSpacerProps,
	HHWallProps, HHWindowProps,
	HHPetProps
} from './household.types'

export class HH extends PureComponent {
	static Parent: HHAssignType<HHParentProps, 'div'> = HHParent
	static Child: HHAssignType<HHChildProps, 'div'> = HHChild
	static GrandParent: HHAssignType<HHGrandparentProps, 'div'> = HHGrandParent
	static Pet: HHAssignType<HHPetProps, 'div'> = HHPet
	static Wall: HHAssignType<HHWallProps, 'div'> = HHWall
	static Spacer: HHAssignType<HHSpacerProps, 'div'> = HHSpacer
	static Positioned: HHAssignType<HHPositionedProps, 'div'> = HHPositioned
	static Simple: HHAssignType<HHSimpleProps, 'div'> = HHSimple
	static Window: HHAssignType<HHWindowProps, 'img'> = HHWindow
	static Image: HHAssignType<HHImageProps, 'img'> = HHImage
	static Provider = HHProvider
	static Consumer = HHConsumer
}
