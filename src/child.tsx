import styled from "styled-components";
import { IAbsoluteDivProps, ILayoutFlexChildProps, ILayoutFlexParentProps, ISpacerProps } from "./Bricks.types";
import theme from "../../themes/theme";
import { padding, position } from "polished";
import { isBool } from "../../utils/validators";
import { mediaMax, withRem } from "../../utils/styling";

// meant to be stacked on top of each other FlexParent => FlexChild => content/FlexParent => FlexChild => content/FlexParent...
// => IE reasons and layout consistency reasons
export const FlexParent = styled.div<ILayoutFlexParentProps>`
    display: ${({ isInline }) => (isInline ? "inline-flex" : "flex")};
    ${({ fullWidth }) => (fullWidth ? `width: 100%;` : "")}
    ${({ fillHeight }) => (fillHeight ? `height: 100%;` : "")}
    ${({ height }) => (height ? `height: ${height};` : "")}
    ${({ flexDirection }) => (flexDirection ? `flex-direction: ${flexDirection};` : "")}
    ${({ background }) => (background ? `background: ${background};` : "")}
    ${({ alignItems }) => (alignItems ? `align-items: ${alignItems};` : "")}
    ${({ justifyContent }) => (justifyContent ? `justify-content: ${justifyContent};` : "")}
    ${({ flexWrap }) => (flexWrap ? "flex-wrap: wrap;" : "")}
    ${({ isRelative }) => (isRelative ? "position: relative;" : "")}
    ${({ withBottomSpacing, spacing = "default" }) => withBottomSpacing && `margin-bottom: ${theme.spacing[spacing]};`}
`;

// we set the width of element by flex-basis & max-width + inline-block (IE fix)
export const FlexChild = styled.div<ILayoutFlexChildProps>`
    display: inline-block;
    flex-grow: ${({ flexGrow }) => flexGrow || 0};
    flex-shrink: ${({ flexShrink }) => flexShrink || 0};
    flex-basis: ${({ width }) => width || "auto"};
    max-width: ${({ width }) => (width ? width : "100%")};
    ${({ withBottomSpacing, spacing = "default" }) => withBottomSpacing && `margin-bottom: ${theme.spacing[spacing]};`}
    ${({ noFontSize }) => noFontSize && "font-size: 0;"}
    ${({ justifySelfEnd }) => justifySelfEnd && "margin-left: auto;"}
    ${({ fullWidth }) => fullWidth && `width: 100%;`}
    ${({ withPointer }) => withPointer && `cursor: pointer;`}
`;

export const AbsoluteDiv = styled("div")<IAbsoluteDivProps>`
  position: absolute;
  ${({ zIndex }) => zIndex && `z-index: ${zIndex};`}
  ${({ top }) => top && `top: ${isBool(top) ? 0 : withRem(+top)};`}
  ${({ right }) => right && `right: ${isBool(right) ? 0 : withRem(+right)};`}
  ${({ bottom }) => bottom && `bottom: ${isBool(bottom) ? 0 : withRem(+bottom)};`}
  ${({ left }) => left && `left: ${isBool(left) ? 0 : withRem(+left)};`}
  ${({ all }) => all && `${position("fixed", 0)}`}
`;

export const Spacer = styled("div")<ISpacerProps>`
    ${({ top, spacing }) => top && `padding-top: ${theme.spacing[spacing]};`}
    ${({ right, spacing }) => right && `padding-right: ${theme.spacing[spacing]};`}
    ${({ bottom, spacing }) => bottom && `padding-bottom: ${theme.spacing[spacing]};`}
    ${({ left, spacing }) => left && `padding-left: ${theme.spacing[spacing]};`}
    ${({ all, spacing }) => all && `padding: ${theme.spacing[spacing]};`}
    ${({ vertical, spacing }) => vertical && padding(theme.spacing[spacing], null)}
    ${({ horizontal, spacing }) => horizontal && padding(null, theme.spacing[spacing])}
    ${mediaMax(theme.breakpoint.md)} {
        ${({ removeHorizontalMd }) => removeHorizontalMd && padding(null, 0)}
    }
`;

Spacer.defaultProps = {
	spacing: "default",
	removeHorizontalMd: false,
};
