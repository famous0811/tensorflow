import React from "react";
import styled from "styled-components";

interface MenuItemProps {
  title: string;
  other?: {
    title: string;
    text?: string;
  }[];
}

function MenuItem({ title, other }: MenuItemProps) {
    console.log(other);
  return (
    <Wrap className={other ? "other" : ""}>
      <span>{title}</span>
      <div>
        {other?.map((data) => (
          <div>
              <div>{data.title}</div>
              <div>{data.text}</div>
              </div>
        ))}
      </div>
    </Wrap>
  );
}
const Wrap = styled.div`
  position: relative;
  &.other {
    & > span {
      &::after {
        position: absolute;
        font-family: "Material Icons";
        content: "arrow_drop_down";
        transition: transform 0.3s;
      }
    }
    &>div{
        display: none;
        position:absolute;
        top:0;
        background:white;

        /* display: flex;
        flex-direction: column;
          padding:20px; */
    }
    &:hover {
      & > span {
        &::after {
          transform: rotate(-180deg);
        }
      }
      &>div{
          display:flex;
          flex-direction: column;
          padding:20px;
      }
    }
  }
  &:hover {
    &::before {
      display: block;
    }
  }
  &::before {
    display: none;
    position: absolute;
    content: "";
    width: 100%;
    height: 3px;
    background: #5f6368;
    bottom: -12px;
    border-radius: 10px 10px 0px 0px;
  }
  & > span {
    position: relative;
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    line-height: 26px;
    color: #5f6368;
    font-weight: bold;
  }
  &>div{
      display:none;
  }
`;
export default MenuItem;
