import React from "react";
import styled from "styled-components";

import colors from "../../constants/colors";

import Drivider from "../asset/drivider";
import Rowbox from "../asset/rowbox";

function footer() {
  return (
    <Wrap>
      <TopData>
        <li>
          <h3>최신 소식 확인하기</h3>
          <ul>
            <li>블로그</li>
            <li>GitHub</li>
            <li>Twitter</li>
            <li>YouTube</li>
          </ul>
        </li>
        <li>
          <h3>지원</h3>
          <ul>
            <li>문제 추적기</li>
            <li>출시 노트</li>
            <li>Stack Overflow</li>
            <li>브랜드 가이드라인</li>
            <li>TensorFlow 인용</li>
          </ul>
        </li>
      </TopData>
      <Drivider />
      <Bottomdata>
        <ul>
          <li>약관</li>
          <li>개인정보처리방침</li>
        </ul>
        <Rowbox>
          <div>TensorFlow 월간 뉴스레터 구독</div>
          <button>구독</button>
          <div>한국어</div>
        </Rowbox>
      </Bottomdata>
    </Wrap>
  );
}
const Wrap = styled.footer`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  padding: 0px 20px;
  & > * {
    display: flex;
    width: 100%;
  }
`;
const TopData = styled.ul`
  & > li {
    width: 100%;
    & > ul > li {
      font-size: 15px;
      font-weight: 400;
      line-height: 25px;
      cursor: pointer;
      &:hover {
        color: ${colors.blue};
      }
    }
  }
`;
const Bottomdata = styled.div`
  justify-content: space-between;
  align-items: center;
  padding: 20px 0px;
  & > ul {
    width: 100%;
    display: flex;
    & > li {
      font-size: 14px;
      font-weight: 400;
      line-height: 25px;
      cursor: pointer;
      &::after {
        content: "|";
        margin: 0 8px;
      }
      &:last-child::after{
          content:none;
      }
    }
  }
  &>div{
      width: 100%;
      justify-content:flex-end;
      align-items: center;
    &>*{
        font-size: 14px;
      font-weight: 400;
      line-height: 25px;
      margin:0px 10px;
      font-family: Roboto, "Noto Sans", "Noto Sans JP", "Noto Sans KR", "Noto Naskh Arabic", "Noto Sans Thai", "Noto Sans Hebrew", "Noto Sans Bengali", sans-serif;
    }
    &>button{
        border:none;
        background:${colors.blue};
        color:white;
        border-radius:5px;
        padding:5px 20px;
        
    }

  }
`;
export default footer;
