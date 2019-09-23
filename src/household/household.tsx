import { PureComponent } from 'react'
import {
	HHParent,
	HHChild,
	HHGrandParent,
	HHPet,
	HHWall
} from './layout/household.styled'
import { HHConsumer, HHProvider } from './layout/household.context'

export class HH extends PureComponent {
	static Parent = HHParent
	static Child = HHChild
	static GrandParent = HHGrandParent
	static Pet = HHPet
	static Wall = HHWall
	static Provider = HHProvider
	static Consumer = HHConsumer
}
