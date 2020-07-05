## `<FlexParent />`
+ #### props:
 ```
alignItems?: string
justifyContent?: string
wrap?: boolean
column?: boolean
reverse?: boolean
fillHeight?: boolean
isInline?: boolean
withBottomSpacing?: boolean | 'big' | 'default' | 'small' | string
height?: string
background?: string
backgroundColor?: string
isRelative?: boolean
withPointer?: boolean
fullWidth?: boolean
maxWidth?: string
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
width?: string
noFontSize?: boolean
justifySelfEnd?: boolean
withBottomSpacing?: boolean | 'big' | 'default' | 'small' | string
height?: string
background?: string
backgroundColor?: string
isRelative?: boolean
withPointer?: boolean
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
withBottomSpacing?: boolean | 'big' | 'default' | 'small' | string
height?: string
background?: string
backgroundColor?: string
isRelative?: boolean
withPointer?: boolean
fullWidth?: boolean
maxWidth?: string
withBefore?: CSSObject
withAfter?: CSSObject
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
top?: boolean | 'big' | 'default' | 'small' | string
right?: boolean | 'big' | 'default' | 'small' | string
bottom?: boolean | 'big' | 'default' | 'small' | string
left?: boolean | 'big' | 'default' | 'small' | string
all?: boolean | 'big' | 'default' | 'small' | string
vertical?: boolean | 'big' | 'default' | 'small' | string
horizontal?: boolean | 'big' | 'default' | 'small' | string
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


