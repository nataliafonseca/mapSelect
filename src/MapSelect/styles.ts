import styled from "styled-components";

import { IStyle, IStyledMap, IStyledState } from "./types";

const width = (width?: string): string => width || "100%";
const height = (height?: string): string => height || "100%";

const bg = (style?: IStyle): string => style?.bg || "#8d8d8d";
const activeBg = (style?: IStyle): string => style?.activeBg || "#e77d8f";
const label = (style?: IStyle): string => style?.label || "#ffffff";
const stroke = (style?: IStyle): string => style?.stroke || "#6c6c6c";

export const Map = styled.svg<IStyledMap>`
  max-height: ${(props) => height(props.maxHeight)};
  max-width: ${(props) => width(props.maxWidth)};
`;

export const State = styled.g<IStyledState>`
  fill: ${({ selected, style }) => (selected ? activeBg(style) : bg(style))};
  stroke: ${({ style }) => stroke(style)};
  cursor: pointer;
  transform: all 0.1s;

  & text {
    stroke: initial;
    fill: ${({ style }) => label(style)};
    font-family: "Arial", sans-serif;
    font-weight: bold;
    font-size: 12px;
    cursor: pointer;
    user-select: none;
  }

  &:hover {
    filter: brightness(90%);

    & Text {
      filter: brightness(unset);
    }
  }
`;
