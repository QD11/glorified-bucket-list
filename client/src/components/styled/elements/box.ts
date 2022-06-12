import { ComponentPropsWithoutRef } from "react";
import styled from "styled-components";
import { CSSBaseProps, Placement } from "components/styled/interfaces";

export interface BoxBaseProps
    extends CSSBaseProps,
        Placement,
        ComponentPropsWithoutRef<"div"> {
    column?: boolean;
    justifyContent?: string;
    alignItems?: string;
    gap?: boolean;
    gapSize?: number;
    card?: boolean;
    bulmaBox?: boolean;
    cursor?: string;
    borderRadius?: number;
    backgroundColor?: string;
    color?: string;
    border?: string;
    outline?: string;
    overflow?: string;
    overflowX?: string;
    overflowY?: string;
    padding?: number;
    minWidth?: string;
    minHeight?: string;
    maxHeight?: string;
    writingMode?: string;
}

export const Box = styled.div<BoxBaseProps>`
    padding: ${(props) => (props.padding && `${props.padding}rem`) || null};
    margin: ${(props) => (props.margin && `${props.margin}rem`) || null};
    margin-top: ${(props) =>
        (props.marginTop && `${props.marginTop}rem`) || null};
    margin-bottom: ${(props) =>
        (props.marginBottom && `${props.marginBottom}rem`) || null};
    margin-right: ${(props) =>
        (props.marginRight && `${props.marginRight}rem`) || null};
    margin-left: ${(props) =>
        (props.marginLeft && `${props.marginLeft}rem`) || null};
    padding-top: ${(props) =>
        (props.paddingTop && `${props.paddingTop}rem`) || null};
    padding-bottom: ${(props) =>
        (props.paddingBottom && `${props.paddingBottom}rem`) || null};
    padding-right: ${(props) =>
        (props.paddingRight && `${props.paddingRight}rem`) || null};
    padding-left: ${(props) =>
        (props.paddingLeft && `${props.paddingLeft}rem`) || null};
    display: ${(props) => (props.flex && "flex") || null};
    flex: ${(props) => props.flexProp || null};
    border: ${(props) => props.border || null};
    outline: ${(props) => props.outline || null};
    overflow: ${(props) => props.overflow || null};
    overflow-x: ${(props) => props.overflowX || null};
    overflow-y: ${(props) => props.overflowY || null};
    flex-direction: ${(props) => (props.column && "column") || null};
    justify-content: ${(props) => props.justifyContent || null};
    align-items: ${(props) =>
        (props.centerV && "center") || props.alignItems || null};
    gap: ${(props) =>
        (props.gap && "5px") ||
        (props.gapSize && `${props.gapSize}rem`) ||
        null};
    min-width: ${(props) => props.minWidth || null};
    min-height: ${(props) => props.minHeight || null};
    max-height: ${(props) => props.maxHeight || null};
    width: ${(props) => props.width || null};
    height: ${(props) => props.height || null};
    min-width: ${(props) => props.minWidth};
    cursor: ${(props) => props.cursor || null};
    color: ${(props) => props.color || null};
    background-color: ${(props) => props.backgroundColor || null};
    border-radius: ${(props) =>
        (props.borderRadius && `${props.borderRadius}rem`) || null};
    position: ${(props) =>
        (props.absolute && "absolute") ||
        (props.sticky && "sticky") ||
        (props.relative && "relative") ||
        (props.static && "static") ||
        "null"};
    top: ${(props) => (props.top && props.top) || null};
    right: ${(props) => (props.right && props.right) || null};
    bottom: ${(props) => (props.bottom && props.bottom) || null};
    left: ${(props) => (props.left && props.left) || null};
    ${(props) =>
        (props.card &&
            `
        background-color: white;
        border-radius: 0.25rem;
        box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 10%), 0 0px 0 1px rgb(10 10 10 / 2%);
        color: #4a4a4a;
        max-width: 100%;
        position: relative;
        width: 100%;
        padding: 11px;
        &:hover {
          background-color: lightgrey;
        }
    `) ||
        null};
    ${(props) =>
        (props.bulmaBox &&
            `
        background-color: white;
        border-radius: 6px;
        box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 10%), 0 0px 0 1px rgb(10 10 10 / 2%);
        color: #4a4a4a;
        display: block;
        padding: 1.25rem;
      `) ||
        null};
    writing-mode: ${(props) => props.writingMode};
`;
