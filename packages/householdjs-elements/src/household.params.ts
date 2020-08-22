import {
	CSSObject,
	FlexChildProps,
	CommonElementProps,
	SimpleWrapperProps,
	PositionedProps,
	SpacerProps,
	FlexParentProps,
	WithTransitionPropType,
	ImageProps,
	ContainerOnlyProps,
	SvgProps,
	SvgParamsReturn
} from '@householdjs/types'

import {
	getSpacingOrValue,
	getZeroOrValue,
	isBool,
	withBefore as withBeforeFn,
	withAfter as withAfterFn,
	withTransition as withTransitionFn,
	getNumber
} from '@householdjs/utils'

import { calculateSize } from './svg/svg.utils'

/**
 * @param withBottomMargin - true sets 'margin-bottom: 1rem;', string sets e.g. 'margin-bottom: 10rem;'
 * @param width - sets css max-width property
 */
export const getContainerOnlyProps = ({
	withBottomMargin,
	width
}: ContainerOnlyProps): CSSObject | {} => ({
	...(withBottomMargin
		? {
				marginBottom: getSpacingOrValue(withBottomMargin)
		  }
		: {}),
	...(width ? { width } : {})
})

/**
 * @param sTop - true sets 'padding-top; 1rem;', string e.g. 'padding-top; 10rem;'
 * @param sRight - true sets 'padding-right; 1rem;', string e.g. 'padding-right; 10rem;'
 * @param sBottom - true sets 'padding-bottom; 1rem;', string e.g. 'padding-bottom; 10rem;'
 * @param sLeft - true sets 'padding-left; 1rem;', string e.g. 'padding-left; 10rem;'
 * @param sVertical - true sets 'padding-top; 1rem; padding-bottom; 1rem;', string e.g. 'padding-top; 10rem; padding-bottom; 10rem;'
 * @param sHorizontal - true sets 'padding-left; 1rem; padding-right; 1rem;', string e.g. 'padding-left; 10rem; padding-right; 10rem;'
 * @param sAll - true sets 'padding; 1rem;', string e.g. 'padding; 10rem;'
 * @returns CSSObject (can be empty).
 */
export const getSpacerStyles = ({
	sTop,
	sRight,
	sBottom,
	sLeft,
	sVertical,
	sHorizontal,
	sAll
}: SpacerProps): CSSObject | {} => ({
	// the object can be empty
	...(sTop
		? {
				paddingTop: getSpacingOrValue(sTop)
		  }
		: {}),
	...(sRight
		? {
				paddingRight: getSpacingOrValue(sRight)
		  }
		: {}),
	...(sBottom
		? {
				paddingBottom: getSpacingOrValue(sBottom)
		  }
		: {}),
	...(sLeft
		? {
				paddingLeft: getSpacingOrValue(sLeft)
		  }
		: {}),
	...(sVertical
		? {
				paddingTop: getSpacingOrValue(sVertical),
				paddingBottom: getSpacingOrValue(sVertical)
		  }
		: {}),
	...(sHorizontal
		? {
				paddingLeft: getSpacingOrValue(sHorizontal),
				paddingRight: getSpacingOrValue(sHorizontal)
		  }
		: {}),
	...(sAll
		? {
				padding: getSpacingOrValue(sAll)
		  }
		: {})
})

/**
 * @param transitionParams - to enable css transitions.
 * @returns CSSObject (can be empty).
 */
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
 * @param height - sets css height property
 * @param background - sets css background property
 * @param backgroundColor - sets css background-color property
 * @param isRelative - sets css 'position: relative;'
 * @param withPointer - sets css 'cursor: pointer;'
 * @param fullWidth - sets css 'width: 100%;'
 * @param maxWidth - sets css max-width property
 * @param withTransition - enable transitions on an element
 * @param minHeight - sets css min-height property
 * @param zIndex - works only if isRelative is set -> sets css z-index property
 * @param rest - other props evaluated by getSpacerStyles.
 * @param onClick - sets css 'cursor: pointer; when onClick prop is applied'.
 * @returns CSSObject
 */
export const getCommonStyles = ({
	height,
	background,
	backgroundColor,
	isRelative = false,
	withPointer = false,
	fullWidth = false,
	maxWidth,
	withTransition,
	minHeight,
	zIndex,
	onClick,
	noFontSize,
	...rest
}: CommonElementProps & SpacerProps): CSSObject => ({
	height,
	background,
	backgroundColor,
	maxWidth,
	...getSpacerStyles(rest),
	...(isRelative
		? {
				position: 'relative',
				...(zIndex
					? {
							zIndex
					  }
					: {})
		  }
		: {}),
	...(withPointer || onClick
		? {
				cursor: 'pointer'
		  }
		: {}),
	...(fullWidth
		? {
				width: '100%'
		  }
		: {}),
	...(withTransition
		? {
				...getTransitionStyles(withTransition)
		  }
		: {}),
	...(minHeight
		? {
				minHeight
		  }
		: {}),
	...(noFontSize
		? {
				fontSize: 0
		  }
		: {})
})

/**
 * @param fillHeight - true sets css 'height: 100%;'.
 * @param column - true sets css 'flex-direction: column;'
 * @param reverse - true sets css flex-direction to row-reverse or column-reverse
 * @param wrap - true sets 'flex-wrap: 'wrap'
 * @param justifyContent - set css justify-content property
 * @param alignItems - set css align-items property
 * @param isInline - true sets css to 'display: inline-flex;'
 * @param withBottomMargin - true sets 'margin-bottom: 1rem;', string sets e.g. 'margin-bottom: 10rem;'
 * @param width - sets css max-width property
 * @param rest - other css evaluated by getCommonStyles
 * @returns CSSObject
 */
export const getFlexParentStyles = ({
	fillHeight,
	column,
	reverse,
	wrap,
	justifyContent,
	alignItems,
	isInline,
	withBottomMargin,
	width,
	...rest
}: FlexParentProps): CSSObject => ({
	...getCommonStyles(rest),
	...getContainerOnlyProps({ withBottomMargin, width }),
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
 * @param grow - true sets css to 'flexGrow: 1;' / number e.g 'flexGrow: 5;'
 * @param shrink - true sets css to 'flexShrink: 1;' / number e.g 'flexShrink: 5;'
 * @param flexBasis - sets css flex-basis property, when withIe is enabled, also the css max-width property to flex-basis defined value
 * @param noFontSize - true sets elements css 'fontSize: 0;' -> FlexChild element sometimes inherits fontSize, which is sometimes messing up elements position within flex layout
 * @param justifySelfEnd - true sets css 'margin-left: auto;', moving the FlexChild element to the right size of FlexParent element
 * @param withIe - if flexBasis is defined, true sets css max-width to css flex-basis defined value -> prevents some flex layout issues in Internet Explorer
 * @param rest - other css evaluated by getCommonStyles
 * @returns CSSObject
 */
export const getFlexChildStyles = ({
	grow,
	shrink,
	flexBasis,
	noFontSize,
	justifySelfEnd,
	withIe,
	...rest
}: FlexChildProps): CSSObject => ({
	...getCommonStyles(rest),
	display: 'inline-block',
	flexGrow: +isBool(grow) || (grow as number),
	flexShrink: +isBool(shrink) || (shrink as number),
	...(flexBasis && withIe
		? {
				maxWidth: flexBasis
		  }
		: {}),
	flexBasis: flexBasis || 'auto',
	...(justifySelfEnd
		? {
				marginLeft: 'auto'
		  }
		: {})
})

/**
 * @param center - true sets css 'margin-left: auto; margin-right: auto;'
 * @param isInline - true sets css 'display: inline-block;'
 * @param withBefore - add ':before' element and set its css properties
 * @param withAfter - add ':after' element and set its css properties
 * @param rest - other css evaluated by getCommonStyles
 * @param withBottomMargin - true sets 'margin-bottom: 1rem;', string sets e.g. 'margin-bottom: 10rem;'
 * @param width - sets css max-width property
 * @returns CSSObject
 */
export const getSimpleWrapperStyles = ({
	center,
	isInline,
	withBefore,
	withAfter,
	withBottomMargin,
	width,
	...rest
}: SimpleWrapperProps): CSSObject => ({
	...getCommonStyles(rest),
	...getContainerOnlyProps({ withBottomMargin, width }),
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
 * @param top - true sets css to 'top:0;' / string e.g css 'top: 10px;'
 * @param right - true sets css to 'right:0;' / string e.g css 'right: 10px;'
 * @param bottom - true sets css to 'bottom:0;' / string e.g css 'bottom: 10px;'
 * @param left - true sets css to 'left:0;' / string e.g css 'left: 10px;'
 * @param all - true sets css to 'top:0; right:0; bottom:0; left:0;' / string e.g css 'sets top:10px; right:10px; bottom:10px; left:10px;'
 * @param vertical - true sets css to 'top:0; bottom:0;' / string e.g css 'top: 10px; bottom: 10px;'
 * @param horizontal - true sets css to 'left:0; right:0;' / string e.g css 'left: 10px; right: 10px;'
 * @param zIndex - sets css z-index property
 * @param position - sets css position property (cannot be static).
 * @param withTransition - enable css transitions on element.
 * @returns CSSObject
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
 * @param isInline - true replaces "display: block" by "display: inline-block".
 * @returns CSSObject
 */
export const getImageStyles = ({ isInline }: ImageProps): CSSObject => ({
	display: isInline ? 'inline-block' : 'block',
	width: '100%',
	height: 'auto'
})

export const getSvgParams = ({
	size,
	viewBoxWidth,
	viewBoxHeight,
	viewBoxSize,
	overflowFixScaleRatio = 1,
	overflowFixPosition = 0,
	children,
	...restProps
}: SvgProps): SvgParamsReturn => {
	const vbWidth = viewBoxSize || viewBoxWidth
	const vbHeight = viewBoxSize || viewBoxHeight
	const vbWidthNumber = getNumber(vbWidth)
	const vbHeightNumber = getNumber(vbHeight)

	const { width, height } = calculateSize(vbWidthNumber, vbHeightNumber, size)

	const viewBox = `0 0 ${vbWidth} ${vbHeight}`

	return {
		...restProps,
		width,
		height,
		viewBox,
		overflowFixScaleRatio,
		overflowFixPosition,
		children
	}
}
