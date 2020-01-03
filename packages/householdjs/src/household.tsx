import { PureComponent } from 'react'
import {
	HHFlexParent,
	HHFlexChild,
	HHSimple,
	HHPositioned,
	HHSpacer,
	HHImage
} from './household.styled'

export class HH extends PureComponent {
	static FlexParent = HHFlexParent
	static FlexChild = HHFlexChild
	static Spacer = HHSpacer
	static Positioned = HHPositioned
	static Simple = HHSimple
	static Image = HHImage
}
