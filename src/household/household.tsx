import { PureComponent } from 'react'
import {
	HHParent,
	HHChild,
	HHGrandParent,
	HHPet,
	HHWall,
	HHPositioned,
	HHSimple,
	HHSpacer
} from './layout/household.styled'
import { HHConsumer, HHProvider } from './layout/household.context'

export class HH extends PureComponent {
	static Parent = HHParent
	static Child = HHChild
	static GrandParent = HHGrandParent
	static Pet = HHPet
	static Wall = HHWall
	static Spacer = HHSpacer
	static Positioned = HHPositioned
	static Simple = HHSimple
	static Provider = HHProvider
	static Consumer = HHConsumer
}
