import React from "react";
import styled, { css } from "styled-components";
interface Rowprops {
  nowrap?: boolean;
  around?: boolean;
  children?: React.ReactNode;
  width?:string;
}
function rowbox({ nowrap, children,around,width }: Rowprops) {
  return <Wrap nowrap={nowrap} around={around} width={width}>{children} </Wrap>;
}
const Wrap = styled.div<{ nowrap?: boolean,around?: boolean,width?:string}>`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  width:${({width})=>width ? width : 'auto'};
  ${({ nowrap }) =>
    nowrap &&
    css`
      flex-flow: row nowrap;
    `}
    ${({ around }) =>
    around &&
    css`
      justify-content:space-around;
    `}
`;
export default rowbox;
