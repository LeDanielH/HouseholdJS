## `<FlexParent />`
+ #### props:
 ```
alignItems?: string
justifyContent?: string
wrap?: boolean
column?: boolean
reverse?: boolean
fillHeight?: boolean
noFontSize?: boolean
isInline?: boolean
height?: string
minHeight?: string
background?: string
backgroundColor?: string
isRelative?: boolean
withPointer?: boolean
fullWidth?: boolean
maxWidth?: string
width?: string
sTop?: boolean | 'big' | 'default' | 'small' | string
sRight?: boolean | 'big' | 'default' | 'small' | string
sBottom?: boolean | 'big' | 'default' | 'small' | string
sLeft?: boolean | 'big' | 'default' | 'small' | string
sAll?: boolean | 'big' | 'default' | 'small' | string
sVertical?: boolean | 'big' | 'default' | 'small' | string
sHorizontal?: boolean | 'big' | 'default' | 'small' | string
withBottomMargin?: boolean | 'big' | 'default' | 'small' | string
withTransition?: boolean | {
    transitionProperties?: string | Array<string>
    transitionOptions?: {
        timing?: string
        durationInMs?: number
        willChange?: boolean
    }
    disableTransitions?: boolean
}
+ common <div> element attributes
+ styled components props, e.g `as` => https://www.styled-components.com/docs/api
 ```


## `<FlexChild />`
+ #### props:
```
grow?: boolean | number
shrink?: boolean | number
flexBasis?: string
fullWidth?: boolean
noFontSize?: boolean
justifySelfEnd?: boolean
height?: string
minHeight?: string
background?: string
backgroundColor?: string
isRelative?: boolean
withPointer?: boolean
sTop?: boolean | 'big' | 'default' | 'small' | string
sRight?: boolean | 'big' | 'default' | 'small' | string
sBottom?: boolean | 'big' | 'default' | 'small' | string
sLeft?: boolean | 'big' | 'default' | 'small' | string
sAll?: boolean | 'big' | 'default' | 'small' | string
sVertical?: boolean | 'big' | 'default' | 'small' | string
sHorizontal?: boolean | 'big' | 'default' | 'small' | string
withTransition?: boolean | {
    transitionProperties?: string | Array<string>
    transitionOptions?: {
        timing?: string
        durationInMs?: number
        willChange?: boolean
    }
    disableTransitions?: boolean
}
+ common <div> element attributes
+ styled components props, e.g `as` => https://www.styled-components.com/docs/api
 ```

## `<SimpleWrapper />`
+ #### props:
 ```
center?: boolean
isInline?: boolean
height?: string
minHeight?: string
background?: string
backgroundColor?: string
isRelative?: boolean
withPointer?: boolean
fullWidth?: boolean
noFontSize?: boolean
maxWidth?: string
width?: string
withBefore?: CSSObject
withAfter?: CSSObject
sTop?: boolean | 'big' | 'default' | 'small' | string
sRight?: boolean | 'big' | 'default' | 'small' | string
sBottom?: boolean | 'big' | 'default' | 'small' | string
sLeft?: boolean | 'big' | 'default' | 'small' | string
sAll?: boolean | 'big' | 'default' | 'small' | string
sVertical?: boolean | 'big' | 'default' | 'small' | string
sHorizontal?: boolean | 'big' | 'default' | 'small' | string
withBottomMargin?: boolean | 'big' | 'default' | 'small' | string
withTransition?: boolean | {
    transitionProperties?: string | Array<string>
    transitionOptions?: {
        timing?: string
        durationInMs?: number
        willChange?: boolean
    }
    disableTransitions?: boolean
}

+ common <div> element attributes
+ styled components props, e.g `as` => https://www.styled-components.com/docs/api
 ```

## `<Positioned />`
+ #### props:
 ```
top?: boolean | string
right?: boolean | string
bottom?: boolean | string
left?: boolean | string
all?: boolean | string
vertical?: boolean | string
horizontal?: boolean | string
zIndex?: number
position?: 'absolute' | 'fixed' | 'relative'
withTransition?: boolean | {
    transitionProperties?: string | Array<string>
    transitionOptions?: {
        timing?: string
        durationInMs?: number
        willChange?: boolean
    }
    disableTransitions?: boolean
}
+ common <div> element attributes
+ styled components props, e.g `as` => https://www.styled-components.com/docs/api
 ```

## `<Spacer />`
+ #### props:
 ```
sTop?: boolean | 'big' | 'default' | 'small' | string
sRight?: boolean | 'big' | 'default' | 'small' | string
sBottom?: boolean | 'big' | 'default' | 'small' | string
sLeft?: boolean | 'big' | 'default' | 'small' | string
sAll?: boolean | 'big' | 'default' | 'small' | string
sVertical?: boolean | 'big' | 'default' | 'small' | string
sHorizontal?: boolean | 'big' | 'default' | 'small' | string
+ common <div> element attributes
+ styled components props e.g `as` => https://www.styled-components.com/docs/api
 ```

## `<Image />`
+ #### props:
 ```
+ common <div> element attributes
+ styled components props e.g `as` => https://www.styled-components.com/docs/api
 ```
+ It's responsive by default. Fixed width is meant to be defined by it's wrapper, e.g.
```html
<SimpleWrapper maxWidth="30px">
    <Image src="path_to_image">
</SimpleWrapper>
```
## `<Svg />`

#### props:

```
   viewBoxSize?: number - must be defined if viewBoxWidth and viewBoxHeight are not
   viewBoxWidth?: number - must be defined if viewBoxSize is not
   viewBoxHeight?: number - must be defined if viewBoxSize is not
   size?: number
   overflowFixScaleRatio?: number
   overflowFixPosition?: number
   children: ReactNode
```

#### props in detail:

-   **viewBoxSize**
    -   you copy it from original svg element
    -   never change this value!! - paths inside svg are calculations based on `viewBox`
    -   when `viewBoxWidth` and `viewBoxHeight` are the same -> you don't have to define `viewBoxWidth` & `viewBoxHeight` then
-   **viewBoxWidth**
    -   you copy it from original svg element
    -   never change this value!! - paths inside svg are calculations based on `viewBox`
    -   don't define it if you defined `viewBoxSize`
-   **viewBoxHeight**
    -   you copy it from original svg element - never change this value!! - paths inside svg are calculations based on `viewBox`
    -   don't define it if you defined `viewBoxSize`
-   **size**
    -   if not defined, it takes `(viewBoxWidth && viewBoxHeight) || viewBoxSize` as it's width and height parameters
    -   if width and height are not the same, it defines the longer side length -> the other side is ratio calculated
-   **overflowFixScaleRatio**
    -   useful for charts => when you define a stroke, it can overflow the `viewBox`, making part of the svg invisible
-   **overflowFixPosition**
    -   useful for charts => when you use `overflowFixScaleRatio`, the paths inside viewBox might need a little adjustment nudge
-   **children**
    -   all other svg elements but `<svg />`

