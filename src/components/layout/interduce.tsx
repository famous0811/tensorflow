import React from "react";
import styled from "styled-components";

import viewport from "../../constants/viewport";
import colors from "../../constants/colors";

import Drivider from "../asset/drivider";
import Row from "../asset/rowbox";
import BackImg from "../../res/image/back1.svg";
import Int from "../../res/image/interduce.png";
// import
function Interduce() {
  return (
    <Wrap>
      <h1>엔드 투 엔드 오픈소스 머신러닝 플랫폼</h1>
      <SortInterduce>
        <div>
          <span>
            <Row around>
              <Subtitle>TensorFlow</Subtitle>
              <Subtitle>자바스크립트용</Subtitle>
              <Subtitle>모바일 및 IoT용</Subtitle>
              <Subtitle>프로덕션용</Subtitle>
            </Row>
          </span>
          <p>
            ML 모델을 개발하고 학습시키는 데 도움이 되는 핵심 오픈소스
            라이브러리. 브라우저에서 Colab 메모장을 직접 실행하여 빠르게
            시작해보세요.
          </p>
          <a href="">TensorFlow 시작하기</a>
        </div>
      </SortInterduce>
      <div className="image">
        {/* <img src={Int} width="100%" height="100%"/> */}
      </div>
    </Wrap>
  );
}
const Wrap = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 845px;
  /* overflow-x: hidden; */
  background-image: url(${BackImg});
  background-size: 1721px auto;
  margin: auto auto -220px auto;
  max-width: 1721px;
  position: relative;
  & > h1 {
    font-family: "Google Sans", sans-serif;
    font-size: 46px;
    font-weight: 700;
    line-height: 56px;
    display: flex;
    position: absolute;
    top: 11.5%;
    left: 9.5%;
    max-width: 525px;
    color: white;
  }
  & > div {
    width: 100%;
  }
  & > .image {
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: ${viewport.mobile}) {
    flex-direction: column-reverse;
  }
`;
const SortInterduce = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > div {
    box-shadow: 0 0 36px rgba(0,0,0,0.1);
    max-width: 640px;
    background-color: white;
    border-radius: 10px;
    padding: 10px 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    & > span {
      display: flex;
      flex-direction: column;
      width: 100%;
      & > div {
        /* width:calc(100% -30px); */
        border-bottom: 1px solid #dadada;
        /* justify-content: space-around; */
      }
    }
    & > a {
      /* background: linear-gradient(-90deg, #ff9100 18%, #ff6f00 86%); */
      color: ${colors.softBlack};
      border-radius: 5px;
      padding: 10px 20px;
      position: relative;
      font-family: "Google Sans", sans-serif;
      font-size: 16px;
      font-weight: 700;
      line-height: 20px;
      background: none;
      border: none;
      border-radius: 8px;
      padding: 13px 22px;
      &:hover {
        &::after {
          background: none;
          color: white;
        }
      }
      &::after {
        background: #fff;
        transition: background 0.5s, color 0.5s;
        border-radius: 7px;
        content: "TensorFlow 시작하기";
        height: calc(100% - 4px);
        left: 2px;
        opacity: 1;
        position: absolute;
        top: 2px;
        width: calc(100% - 4px);
        z-index: 1;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      &::before {
        background: linear-gradient(to right, #ff6f00, #ff9100);
        border-radius: 8px;
        content: "";
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        width: 100%;
        z-index: 0;
      }
    }
  }
`;
const Subtitle = styled.div`
  position: relative;
  cursor: pointer;
  padding: 24px 18px 14px 18px;
  &:hover{
    &::before {
      /* width: calc(100% - 30px); */
      width:100%;
    }
  }
  &::before {
    content:"";
    bottom:-1px;
    left:0;
    border-radius: 5px 5px 0 0;
    width: 0px;
    height: 3px;
    background: #293241;
    position: absolute;
    transition: width 0.5s;
  }
`;
export default Interduce;
