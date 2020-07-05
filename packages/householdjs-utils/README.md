## ___multiplyStringValue___ (___mvws___)

 ```js
// multiplyStringValue = (numberWithUnit: string, multiplier: number) => string
const fsBase = '1rem';
const fsHeading = multiplyStringValue(fsBase, 2); // '2rem'
 ```

## ___pxToRem___
- sometimes it's easier to define theme values in px and them convert them to rem values for the browser
- `ROOT_FONT_SIZE` is 16 by default

 ```js
// pxToRem = (value: number, rootFontSize: number = ROOT_FONT_SIZE) => string
const theme = {
    fsText: pxToRem(16), // '1rem'
    fsTitle: pxToRem(32), // '2rem'
}
 ```

## ___withBefore___, ___withAfter___

 ```typescript jsx
// withBefore = (styles?: CSSObject) => CSSObject
import { withBefore } from '@householdjs/utils';
import { CSSObject } from "styled-components";
const styles: CSSObject = {
    display: 'block',
    ...withBefore({
        height: '2px',
        width: '100%'
    })
}
// generates
const stylesGenerated: CSSObject = {
    display: 'block',
    [`&:before`]: {
        content: '',
        display: 'block',
        height: '2px',
        width: '100%'
	}
}
/* gerenrates:
    display: 'block',
    [`&:before`]: {
        content: '',
        display: 'block',
        height: '2px',
        width: '100%'
	}
*/
 ```
 - also as a prop to `<SimpleWrapper />`

 ```typescript jsx
import { SimpleWrapper } from "householdjs";
import { CSSObject } from "styled-components";
const withAfterStyles: CSSObject = {
    height: '5px',
    width: '100%',
    position: 'absolute',
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'red'
}
const SimpleComponent = () =>
    <SimpleWrapper
        withAfter={withAfterStyles}
        isRelative
    >
        <p>hello world</p>
    </SimpleWrapper>
```

## ___withTransition___
- quick way to generate css in js transition parameters
 ```typescript
/* withTransition = (
    transitionProperties?: string | Array<string>,
    transitionOptions?: { durationInMs: number, timing: string, willChange: false},
    disableTransitions?: boolean // eg. use an .env variable to disable all transitions in the project
) => CSSObject
*/
import { withTransition } from "@householdjs/utils";
import { CSSObject } from "styled-components";
const divStyles: CSSObject = {
    backgroundColor: 'green',
    ...withTransition('backgroundColor'),
}
// generates
const divStylesGenerated: CSSObject = {
    backgroundColor: 'green',
    transitionProperty: 'backgroundColor', // will be 'all' if you call withTransition() without a parameter
    transitionTimingFunction: 'ease',
    transitionDuration: '300ms'
}

 ```
- can also be used as a prop to `<FlexParent />`, `<FlexChild />`, `<SimpleWrapper />` and `<Positioned />`
 ```typescript jsx
import { SimpleWrapper } from "householdjs";
import { CSSObject } from "styled-components";

interface SimpleComponentProps {
    isEnabled: boolean
}
const ComponentWithAnimatedBackground = ({ isEnabled }: SimpleComponentProps) => {
    const background = isEnabled ? 'green' : 'gray';

    return (
        <SimpleWrapper withTransition background={background}>
            <p>hello world</p>
        </SimpleWrapper>
    )
}

// generates
const simpleWrapperStyles: CSSObject = {
    background: 'green', // isEnabled = true
    transitionProperty: 'all', // will be 'all' if you call withTransition() without a parameter
    transitionTimingFunction: 'ease',
    transitionDuration: '300ms'
}

```

