import React, { PureComponent } from 'react'
import { DropdownStyled } from './dropdown.styled'
import { CLASS_IS_OPEN } from '../constants'

/**
 * @ignore
 */
const initialState = {
	maxHeight: 0
}

/**
 * @ignore
 */
const initialProps = {
	checkDOMUpdate: false,
	isOpen: false,
	maxHeightDefined: 0
	// we might ask for content to load on dropdown open, in that case, we won't know the content height upfront
	// also use it wherever possible, detecting element.offsetHeight comes with layout reflow expense
}

/**
 * @ignore
 */
export type DropdownState = typeof initialState

export type DropdownProps = typeof initialProps

export class Dropdown extends PureComponent<DropdownProps, DropdownState> {
	private content = React.createRef<HTMLDivElement>();
	public state = initialState
	public static defaultProps = initialProps

	private componentDidForceUpdate = () => {
		const mutationObserver = new MutationObserver(this.updateContentHeight)
		if (this.content.current) {
			mutationObserver.observe(
				(this.content.current as unknown) as Node,
				{
					attributes: false,
					characterData: false,
					childList: true,
					subtree: true,
					attributeOldValue: false,
					characterDataOldValue: false
				}
			)
		}
	}

	public componentDidMount(): void {
		const { checkDOMUpdate } = this.props

		this.updateContentHeight()
		// appended files inside dropdown won't trigger height update
		if (checkDOMUpdate) {
			this.componentDidForceUpdate()
		}
	}

	public componentDidUpdate(prevProps: DropdownProps): void {
		const { isOpen } = this.props
		if (prevProps.isOpen !== isOpen) {
			this.updateContentHeight()
		}
	}

	private updateContentHeight = () => {
		const { current } = this.content
		if (current) {
			this.getContentHeight((current as unknown) as HTMLDivElement)
		}
	}

	private getContentHeight = (element: HTMLDivElement): void => {
		const { maxHeightDefined } = this.props
		this.setState({
			maxHeight: maxHeightDefined || element.offsetHeight
		})
	}

	public render() {
		const { isOpen, children, maxHeightDefined } = this.props
		const { maxHeight } = this.state
		return (
			<DropdownStyled
				maxHeight={maxHeightDefined || maxHeight}
				className={isOpen ? CLASS_IS_OPEN : ''}
			>
				<div ref={this.content}>{children}</div>
			</DropdownStyled>
		)
	}
}
