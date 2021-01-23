import React from "react";
import styled from "styled-components";
import viewport from "../../constants/viewport";
interface MainProps {
  src?: string;
  title: string;
  text: string;
}
function Maincontents({ src, title, text }: MainProps) {
  return (
    <Wrap>
      <img src={src} alt="" />
      <div>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* width:100%; */
  flex-grow: 0;
  flex-basis: calc(100% / 3 - 30px);
  & > div {
    padding: 26px 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    & > h2 {
      font-family: "Google Sans", sans-serif;
      font-size: 20px;
      font-weight: 500;
      line-height: 26px;
    }
    & > p {
      padding: 0px;
      text-align: center;
    }
  }
  @media screen and (max-width: ${viewport.mobile}) {
  }
`;

export default Maincontents;
