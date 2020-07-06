import {
	CSSObject,
	FlexChildProps,
	CommonElementProps,
	SimpleWrapperProps,
	PositionedProps,
	SpacerProps,
	FlexParentProps,
	WithTransitionPropType
} from '@householdjs/types'

import {
	getSpacingOrValue,
	getZeroOrValue,
	isBool,
	withBefore as withBeforeFn,
	withAfter as withAfterFn,
	withTransition as withTransitionFn
} from '@householdjs/utils'

export const getTransitionStyles = (
	transitionParams: WithTransitionPropType
): CSSObject | {} => {
	if (transitionParams === true) {
		return withTransitionFn()
	} else {
		return withTransitionFn(
			transitionParams['transitionProperties'],
			transitionParams['transitionOptions'],
			transitionParams['disableTransitions']
		)
	}
}

/**
 * @ignore
 */
export const getCommonStyles = ({
	withBottomSpacing = false,
	height,
	background,
	backgroundColor,
	isRelative = false,
	withPointer = false,
	fullWidth = false,
	maxWidth,
	withTransition
}: CommonElementProps): CSSObject => ({
	height,
	background,
	backgroundColor,
	maxWidth,
	...(isRelative
		? {
				position: 'relative'
		  }
		: {}),
	...(withPointer
		? {
				cursor: 'pointer'
		  }
		: {}),
	...(fullWidth
		? {
				width: '100%'
		  }
		: {}),
	...(withBottomSpacing
		? {
				marginBottom: getSpacingOrValue(withBottomSpacing)
		  }
		: {}),
	...(withTransition
		? {
				...getTransitionStyles(withTransition)
		  }
		: {})
})

/**
 * @ignore
 */
export const getFlexParentStyles = ({
	fillHeight,
	column,
	reverse,
	wrap,
	justifyContent,
	alignItems,
	isInline,
	...rest
}: FlexParentProps): CSSObject => ({
	...getCommonStyles(rest),
	display: isInline ? 'inline-flex' : 'flex',
	justifyContent,
	alignItems,
	...(fillHeight
		? {
				height: '100%'
		  }
		: {}),
	...(column
		? {
				flexDirection: 'column'
		  }
		: {}),
	...(reverse
		? {
				flexDirection: column ? 'column-reverse' : 'row-reverse'
		  }
		: {}),
	...(wrap
		? {
				flexWrap: 'wrap'
		  }
		: {})
})

/**
 * @ignore
 */
export const getFlexChildStyles = ({
	grow,
	shrink,
	width,
	noFontSize,
	justifySelfEnd,
	// TODO hotfix
	withIe,
	...rest
}: FlexChildProps): CSSObject => ({
	...getCommonStyles(rest),
	display: 'inline-block',
	flexGrow: +isBool(grow) || (grow as number),
	flexShrink: +isBool(shrink) || (shrink as number),
	// TODO hotfix
	...(width && withIe
		? {
				maxWidth: width
		  }
		: {}),
	flexBasis: width || 'auto',
	...(noFontSize
		? {
				fontSize: 0
		  }
		: {}),
	...(justifySelfEnd
		? {
				marginLeft: 'auto'
		  }
		: {})
})

/**
 * @ignore
 */
export const getSimpleWrapperStyles = ({
	center,
	isInline,
	withBefore,
	withAfter,
	...rest
}: SimpleWrapperProps): CSSObject => ({
	...getCommonStyles(rest),
	...(center
		? {
				marginLeft: 'auto',
				marginRight: 'auto'
		  }
		: {}),
	...(isInline
		? {
				display: 'inline-block'
		  }
		: {}),
	...(withBefore ? withBeforeFn(withBefore) : {}),
	...(withAfter ? withAfterFn(withAfter) : {})
})

/**
 * @ignore
 */
export const getPositionedStyles = ({
	top,
	right,
	bottom,
	left,
	all,
	vertical,
	horizontal,
	zIndex,
	position = 'absolute',
	withTransition
}: PositionedProps): CSSObject => ({
	position,
	zIndex,
	...(top
		? {
				top: getZeroOrValue(top)
		  }
		: {}),
	...(right
		? {
				right: getZeroOrValue(right)
		  }
		: {}),
	...(bottom
		? {
				bottom: getZeroOrValue(bottom)
		  }
		: {}),
	...(left
		? {
				left: getZeroOrValue(left)
		  }
		: {}),
	...(all
		? {
				top: getZeroOrValue(all),
				right: getZeroOrValue(all),
				bottom: getZeroOrValue(all),
				left: getZeroOrValue(all)
		  }
		: {}),
	...(vertical
		? {
				top: getZeroOrValue(vertical),
				bottom: getZeroOrValue(vertical)
		  }
		: {}),
	...(horizontal
		? {
				right: getZeroOrValue(horizontal),
				left: getZeroOrValue(horizontal)
		  }
		: {}),
	...(withTransition
		? {
				...getTransitionStyles(withTransition)
		  }
		: {})
})

/**
 * @ignore
 */
export const getSpacerStyles = ({
	top,
	right,
	bottom,
	left,
	vertical,
	horizontal,
	all
}: SpacerProps): CSSObject | {} => ({
	// the object can be empty
	...(top
		? {
				paddingTop: getSpacingOrValue(top)
		  }
		: {}),
	...(right
		? {
				paddingRight: getSpacingOrValue(right)
		  }
		: {}),
	...(bottom
		? {
				paddingBottom: getSpacingOrValue(bottom)
		  }
		: {}),
	...(left
		? {
				paddingLeft: getSpacingOrValue(left)
		  }
		: {}),
	...(vertical
		? {
				paddingTop: getSpacingOrValue(vertical),
				paddingBottom: getSpacingOrValue(vertical)
		  }
		: {}),
	...(horizontal
		? {
				paddingLeft: getSpacingOrValue(horizontal),
				paddingRight: getSpacingOrValue(horizontal)
		  }
		: {}),
	...(all
		? {
				padding: getSpacingOrValue(all)
		  }
		: {})
})

/**
 * @ignore
 */
export const getImageStyles = (): CSSObject => ({
	display: 'block',
	width: '100%',
	height: 'auto'
})
