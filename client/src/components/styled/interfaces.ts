export interface CSSMarginProps {
    margin?: number;
    marginTop?: number;
    marginBottom?: number;
    marginLeft?: number;
    marginRight?: number;
}

interface CSSPaddingProps {
    paddingTop?: number;
    paddingBottom?: number;
    paddingLeft?: number;
    paddingRight?: number;
}

export interface CSSBaseProps extends CSSMarginProps, CSSPaddingProps {
    flex?: boolean;
    flexGrow?: number;
    flexProp?: string;
    centerV?: boolean;
    height?: string;
    width?: string;
}

export interface Placement {
    relative?: boolean;
    absolute?: boolean;
    sticky?: boolean;
    static?: boolean;
    top?: string;
    right?: string;
    bottom?: string;
    left?: string;
}
