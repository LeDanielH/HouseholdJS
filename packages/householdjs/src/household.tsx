import { PureComponent } from 'react'
import {
	FlexParent,
	FlexChild,
	SimpleWrapper,
	Positioned,
	Spacer,
	Image
} from './household.styled'

export class HH extends PureComponent {
	static FlexParent = FlexParent
	static FlexChild = FlexChild
	static Spacer = Spacer
	static Positioned = Positioned
	static SimpleWrapper = SimpleWrapper
	static Image = Image
}
