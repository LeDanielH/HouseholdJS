## `<Dropdown />`

#### props:

```
   isOpen: boolean
   checkDOMUpdate?: boolean
   maxHeightDefined?: number
   children: ReactNode
```

#### props in detail:

-   **isOpen**
    -   in most cases the only option you need to define to make this work
-   **maxHeightDefined**
    -   detecting element.offsetHeight comes with a layout reflow expense, this option will help you prevent it
    -   we might ask for the content to load on Dropdown open, in that case, we won't know the content height upfront
-   **checkDOMUpdate**
    -   if Dropdown children are being deeply nested, the dropdown might not be able to detect changes inside dropdown - e.g adding an item to a list
    -   you enable this option, and the Dropdown will detect any changes inside the Dropdown DOM. It comes at the performance expense of course.

## `<SvgIcon />`

#### props:

```
   pointingTo?: 'top' | 'right' | 'bottom' | 'left'
   withPointer?: boolean
   viewBoxSize?: number - must be defined if viewBoxWidth and viewBoxHeight are not
   viewBoxWidth?: number - must be defined if viewBoxSize is not
   viewBoxHeight?: number - must be defined if viewBoxSize is not
   size?: number
   children: ReactNode
```

#### props in detail:
-   **pointingTo**
    -   default is top, make sure your icon (e.g arrow) points to top when exported
-   **withPointer**
    -   adds pointer to an element
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
-   **children**
    -   all other svg elements but `<svg />`
