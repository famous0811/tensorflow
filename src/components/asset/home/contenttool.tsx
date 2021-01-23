import React from "react";
import styled, { css } from "styled-components";
import colors from "../../../constants/colors";
interface contenttoolprops {
  src?: string;
  subtitle?: string;
  title: string;
  video?: boolean;
  news?: boolean;
  text?: string;
}
function contenttool({
  src,
  subtitle,
  title,
  video,
  text,
  news,
}: contenttoolprops) {
  return (
    <Wrap className={news ? "news" : ""}>
      <span>
        <div className="img">
          <img src={src} alt="" width="100%" height="100%" />
        </div>
        <VideoButton video={video} />
      </span>
      <div>
        <div className="sub">{subtitle}</div>
        <div className="title">{title}</div>
        <p className="text">{text}</p>
        {video ? (
          <OtherButtons className="other" video>
            동영상 보기
          </OtherButtons>
        ) : (
          <OtherButtons className="other">자세히 보기</OtherButtons>
        )}
      </div>
    </Wrap>
  );
}
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background: white;
  box-shadow: var(
    --devsite-button-box-shadow,
    0 1px 2px 0 rgba(60, 64, 67, 0.3),
    0 1px 3px 1px rgba(60, 64, 67, 0.15)
  );
  max-width: calc(100% / 3 - 30px);
  &.news {
    margin: 15px;
    max-width: calc(25% - 30px);
    & > div {
      display: flex;
      flex-direction: column;
      height: 100%;
      & > .text {
        font-size: 14px;
        line-height: 22px;
        font-family: "Roboto", sans-serif;
        height: 100%;
        /* max-height:100px; */
      }
    }
  }
  &:hover {
    & > span > .img {
      transform: scale(1.01);
    }
    & > div {
      background-image: linear-gradient(-90deg, #ff9100 18%, #ff6f00 86%);
      color: white;
      & > .other {
        color: white;
        &::after {
          transform: translateX(4px);
        }
      }
    }
  }

  & > span {
    display: flex;
    justify-content: center;
    width: 100%;
    position: relative;
    & > .img {
      width: 100%;
      border-bottom: solid 1px #dadada;
      border-radius: 10px 10px 0 0;
      overflow: hidden;
      transition: transform 0.5s;
    }
  }
  & > div {
    padding: 20px 30px;
    line-height: 200;
    color: ${colors.softBlack};
    background-image: white;
    transition: color 0.5s, background-image 0.5s;
    border-radius: 0px 0px 10px 10px;
    & > .sub {
      font-family: "Roboto", sans-serif;
      font-weight: 400;
      line-height: 18px;
      font-size: 14px;
      margin-bottom: 8px;
    }
    & > .title {
      font-family: "Google Sans", sans-serif;
      font-size: 20px;
      font-weight: 500;
      line-height: 26px;
      margin-bottom: 12px;
    }
    & > .text {
    }
  }
`;
const VideoButton = styled.div<{ video?: boolean }>`
  display: none;
  ${({ video }) =>
    video &&
    css`
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 50%;
      display: flex;
      align-items: center;
      width: 75px;
      height: 75px;
      justify-content: center;
      background: white;
      &::before {
        content: "play_arrow";
        font-family: "Material Icons";
        color: ${colors.primary};
      }
    `}
`;
interface ExploreProps {
  title: string;
  text: string;
  src: string;
  children?: React.ReactNode;
}
export function ExploreContent({ title, text, src, children }: ExploreProps) {
  return (
    <Ewrap>
      <span>
        <img src={src} alt="" width="100%" height="100%" />
      </span>
      <div>
        <div className="title">{title}</div>
        <p className="text">{text}</p>
        <OtherButtons className="other">자세히 알아보기</OtherButtons>
      </div>
    </Ewrap>
  );
}

const Ewrap = styled.div`
  display: flex;
  border-radius: 10px;
  max-width: calc(66.66667% - 30px);
  box-shadow: 0 0 64px rgba(0, 0, 0, 0.22);
  &:hover {
    & > span {
      transform: scale(1.01);
    }
    & > div {
      background-image: linear-gradient(-90deg, #ff9100 18%, #ff6f00 86%);
      color: white;
      & > .other {
        color: white;
        &::after {
          transform: translateX(4px);
        }
      }
    }
  }
  & > span {
    transition: transform 0.5s;
    border-radius: 10px 0 0 10px;
    overflow: hidden;
  }
  & > div {
    background-image: white;
    transition: color 0.5s, background-image 0.5s;
    max-width: 50%;
    display: flex;
    flex-direction: column;
    padding: 20px 10px 20px 20px;
    border-radius: 0 10px 10px 0;
    & > .title {
      font-family: "Google Sans", sans-serif;
      font-size: 24px;
      font-weight: 700;
      line-height: 32px;
    }
    & > .text {
      height: 100%;
      font-size: 14px;
      line-height: 22px;
      font-family: "Roboto", sans-serif;
    }
  }
`;
const OtherButtons = styled.div<{ video?: boolean }>`
  color: ${colors.softBlack};
  font-weight: 600;
  transition: color 0.5s;
  &::after {
    transition: transform 0.5s;
    font-family: "Material Icons";
    position: absolute;
    content: "${({ video }) =>
      video ? "play_circle_outline" : "arrow_forward"}";
  }
  &.rotate {
    &::after {
      transition: transform 0.5s;
      font-family: "Material Icons";
      content: "north_east";
      position: absolute;
    }
  }
`;

interface ResourceProps {
  title: string;
  icon: string;
  text: string;
}

export function ResourceContent({ title, icon, text }: ResourceProps) {
  return (
    <Rwrap>
      <div>
        <div className="title">{title}</div>
        <span className="material-icons">{icon}</span>
      </div>
      <p>{text}</p>
    </Rwrap>
  );
}

const Rwrap = styled.div`
  display: flex;
  flex-direction: column;
  max-width: calc(100% / 3 - 30px);
  box-shadow: 0 0 64px rgba(0, 0, 0, 0.22);
  border-radius: 10px;
  margin: 15px;
  padding: 20px;
  transition: color 0.5s, background-image 0.5s;
  & > div {
    display: flex;
    justify-content: space-between;
    & > .title {
      font-family: "Google Sans", sans-serif;
      font-size: 20px;
      font-weight: 500;
      line-height: 26px;
    }
  }
  & > p {
    font-family: "Roboto", sans-serif;
    font-size: 14px;
    line-height: 22px;
  }

  &:hover {
    color: white;
    background-image: linear-gradient(-90deg, #ff9100 18%, #ff6f00 86%);
  }
`;

interface RecommendBoxProps {
  src: string;
  title: string;
  user: string;
  text: string;
}
export function RecommendBox({ src, title, user, text }: RecommendBoxProps) {
  return (
    <RWrap>
      <span>
        <img src={src} alt="" width="100%" height="100%" />
      </span>
      <div>
        <div>{user}</div>
        <a href="">{title}</a>
        <p>{text}</p>
      </div>
    </RWrap>
  );
}

const RWrap = styled.div`
  display: flex;
  flex-direction: column;
  max-width: calc(100% / 3 - 30px);
  border-radius: 10px;
  box-shadow: var(
    --devsite-button-box-shadow,
    0 1px 2px 0 rgba(60, 64, 67, 0.3),
    0 1px 3px 1px rgba(60, 64, 67, 0.15)
  );
  position:relative;
  &:hover {
    & > span>img {
      transform: scale(1.01);
    }
  }

  & > div {
    margin-top:40%;
    padding-top: 17%;
    position: static;
    padding: 20px 30px;
    z-index:1;
    background:white;

    & > div {
      color: #425066;
      font-family: "Roboto", sans-serif;
      color: #425066;
      font-weight: 700;
      line-height: 18px;
      font-size: 14px;
      margin-bottom: 8px;
      max-width: 42%;
      /* position:absolute; */
      /* top:0; */
    }
    & > a {
      font-family: "Google Sans", sans-serif;
      font-size: 24px;
      font-weight: 700;
      line-height: 32px;
      max-width: 81%;
      color: #425066;
      margin-bottom: 14px;
      /* position:absolute; */
    }
    & > p {
      font-family: "Roboto", sans-serif;
      font-size: 14px;
      line-height: 22px;
    }
  }
  & > span {
    position:absolute;
    &>img{
      transition: transform 0.5s;
    }
    border-radius: 10px 10px 0 0;
    overflow: hidden;
  }
`;
export default contenttool;
