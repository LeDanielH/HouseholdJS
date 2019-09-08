import { PureComponent } from 'react'
import {
	HHParent,
	HHChild,
	HHGrandParent,
	HHPet,
	HHWall
} from './layout/household.styled'

export class HH extends PureComponent {
	static Parent = HHParent
	static Child = HHChild
	static GrandParent = HHGrandParent
	static Pet = HHPet
	static Wall = HHWall
}
