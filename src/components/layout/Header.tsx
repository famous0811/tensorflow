import React from "react";
import styled from "styled-components";

import viewport from "../../constants/viewport";
import colors from "../../constants/colors";
import lockup from "../../res/image/lockup.svg";

import MenuItem from "../asset/header/MenuItem";
function Header() {
  const menus = [
    {
      title: "설치",
    },
    {
      title: "학습",
      other: [
        {
          title: "소개",
          text: "TensorFlow를 처음 이용하시나요?",
        },
        {
          title: "TensorFlow",
          text: "핵심 오픈소스 ML 라이브러리",
        },
        {
          title: "소개",
          text: "TensorFlow를 처음 이용하시나요?",
        },
      ],
    },
    {
      title: "API",
    },
    {
      title: "리소스",
    },
    {
      title: "커뮤니티",
    },
    {
      title: "TensorFlow를 사용해야 하는 이유",
    },
  ];

  const Language = ["한국어", "일본어"];
  return (
    <Wrap>
      <div>
        <Logo src={lockup} alt="logo" />
        <Middle>
          <Menu>
            {menus.map((data) => (
              <MenuItem title={data.title} other={data.other}/>
            ))}
          </Menu>
          <Select>
            <span className="material-icons" />
            <input type="text" placeholder="검색" />
          </Select>
        </Middle>

        <Languageset>
          {Language.map((data) => (
            <option value={data}>{data}</option>
          ))}
        </Languageset>

        <OtherButtons>GitHub</OtherButtons>
        <OtherButtons>로그인</OtherButtons>
      </div>
    </Wrap>
  );
}

const Wrap = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 10;
  @media screen and (max-width: ${viewport.mobile}) {
  }
  & > div {
    height: 48px;
    background: #fff;
    display: flex;
    align-items: center;
    padding: 0px 24px;
  }
`;

const Logo = styled.img`
  height: 32px;
  max-width: 100%;
`;

const Menu = styled.div`
  display: flex;
  justify-content:space-around;
  align-items:center;
  width: 100%;
  max-width:80%;
`;
const Select = styled.div`
  position: relative;
  /* width: 100%; */
  & > span {
    top: 6px;
    left: 8px;
    position: absolute;
    &:before {
      content: "search";
    }
  }
  & > input {
    background: ${colors.gray};
    border-radius: 5px;
    box-sizing: border-box;
    /* width: 100%; */
    height: 100%;
    border: 0px;
    font-size: 14px;
    padding: 8px;
    padding-left: 40px;
    outline: none;
  }
`;
const Languageset = styled.select`
  padding: 5px;
  border-radius: 5px;
  border: 2px solid ${colors.gray};
  /* border-color: ; */
  outline: none;
  margin-right: 10px;
  & > option {
    outline: none;
    &:hover {
      background: ${colors.gray};
    }
  }
`;
const OtherButtons = styled.div`
  height: 100%;
  min-width: 36px;
  width: 100%;
  max-width: 70px;
  font-weight: 500;
  /* font-family: "Roboto", sans-serif;
  font-size: 16px; */
  /* margin:0px 5px; */
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background: ${colors.gray};
    color: ${colors.blue};
  }
`;
const Middle = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding:0px 20px;
`;
export default Header;
