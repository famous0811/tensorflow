import React from "react";
import Header from "./components/layout/Header";
import styled from "styled-components";

import model from "./res/image/model.svg";
import robust from "./res/image/robust.svg";
import research from "./res/image/research.svg";
import footImg from "./res/image/footer-lines.svg";
import up from "./res/image/up.svg";
import down from "./res/image/down.svg";
import tile_helping from "./res/image/tile_helping.jpg";
import tile_medicins from "./res/image/tile_medicins.jpg";
import tile_room from "./res/image/tile_room.jpg";
import tile_tfaisp from "./res/image/tile_tfaisp.png";

import community from "./res/image/card/community.png";
import deeplearning from "./res/image/card/deeplearning.png";
import interduce from "./res/image/card/interduce.png";
import tfaisp from "./res/image/card/tfaisp.png";
import Logos from "./res/image/logo";

import classification from "./res/image/classification.jpg"
import translation from "./res/image/translation.png"
import serving from "./res/image/card/serving.jpg"

import colors from "./constants/colors";
import RowBox from "./components/asset/rowbox";
import Button from "./components/asset/button";
import Toolbox, {
  ResourceContent,
  ExploreContent,
  RecommendBox
} from "./components/asset/home/contenttool";
import Drivider from "./components/asset/drivider";
import Maincontents from "./components/layout/maincontents";
import Footer from "./components/layout/footer";
import Interduce from "./components/layout/interduce";

function App() {
  return (
    <>
      <Header />
      <Wrap>
        <Interduce />
        <Content className="tensorsite-group">
          <div className="tensorsite-main">
            <Welcome>
              <h2>TensorFlow를 사용해야 하는 이유</h2>
              <p>
                TensorFlow는 머신러닝을 위한 엔드 투 엔드 오픈소스 플랫폼입니다.
                도구, 라이브러리, 커뮤니티 리소스로 구성된 포괄적이고 유연한
                생태계를 통해 연구원들은 ML에서 첨단 기술을 구현할 수 있고
                개발자들은 ML이 접목된 애플리케이션을 손쉽게 빌드 및 배포할 수
                있습니다.
              </p>
              <span>정보</span>
            </Welcome>
            <RowBox>
              <Maincontents
                src={research}
                title="손쉬운 모델 빌드"
                text="즉각적인 모델 반복 및 손쉬운 디버깅을 가능하게 하는 즉시 실행 기능이 포함된 Keras와 같은 높은 수준의 직관적인 API를 사용하여 ML 모델을 쉽게 빌드하고 학습시키세요."
              />
              <Maincontents
                title="어디서든 강력한 ML 제작"
                src={model}
                text="사용하는 언어에 상관없이 클라우드, 온프렘, 브라우저 또는 기기에서 모델을 손쉽게 학습시키고 배포하세요."
              />
              <Maincontents
                src={robust}
                title="연구를 위한 강력한 실험"
                text="새로운 아이디어를 개념부터 코드, 최첨단 모델, 게시에 이르기까지 더 빠르게 발전시킬 수 있는 간단하고 유연한 아키텍처"
              />
            </RowBox>
            <Drivider />
          </div>
        </Content>
        <Content className="tensorsite-group">
          <div>
            <Welcome>
              <h2>일반적인 ML 문제 해결책</h2>
              <p style={{ width: "100%" }}>
                TensorFlow로 일반적인 ML 문제를 해결하기 위한 간단한 단계별
                둘러보기
              </p>
            </Welcome>
            <RowBox around>
              <RecommendBox
                src={classification}
                title="첫 번째 신경망"
                user="초보자용"
                text="빠르게 진행되는 전체 TensorFlow 프로그램 개요에서 운동화 및 셔츠와 같은 의류 이미지를 분류하도록 신경망을 학습시키세요."
              />
              <RecommendBox
              src={serving}
                title="생성적 적대 신경망(GAN)"
                user="전문가용"
                text="손으로 쓴 숫자의 이미지를 생성하도록 Keras Subclassing API를 사용하여 생성적 적대 신경망(GAN)을 학습시키세요."
              />
              <RecommendBox
                src={translation}
                title="어텐션을 사용한 인공신경망 기계 번역"
                user="전문가용"
                text="새로운 아이디어를 개념부터 코드, 최첨단 모델, 게시에 이르기까지 더 빠르게 발전시킬 수 있는 간단하고 유연한 아키텍처"
              />
            </RowBox>
            <Drivider />
          </div>
        </Content>
        <Content className="tensorsite-group">
          <div>
            <Welcome>
              <h2>TensorFlow 제공</h2>
              <p>
                다양한 개발자, 기업, 연구자가 참여하는 커뮤니티가 ML을 사용하여
                까다로운 실생활 문제를 해결합니다.{" "}
                <Link href="">#PoweredbyTF</Link>를 통해 TensorFlow가 커뮤니티의
                연구와 애플리케이션을 어떻게 지원하는지 알아보고 나만의{" "}
                <Link href="">스토리를 공유</Link>하는 방법을 확인해 보세요.
              </p>
            </Welcome>
            <RowBox around>
              <Toolbox
                video
                src={tile_helping}
                title="머신러닝을 활용하여 의사가 호흡기 질환을 진단하도록 지원하기"
                subtitle="개발자"
              />
              <Toolbox
                video
                src={tile_medicins}
                title="머신러닝을 활용하여 의사가 호흡기 질환을 진단하도록 지원하기"
                subtitle="엔터프라이즈"
              />
              <Toolbox
                video
                src={tile_room}
                title="머신러닝을 활용하여 의사가 호흡기 질환을 진단하도록 지원하기"
                subtitle="Reaserch"
              />
            </RowBox>
            <Drivider />
          </div>
        </Content>
        <Content className="tensorsite-group">
          <div>
            <Welcome>
              <h2>Explore our AI Service Partners</h2>
              <p>
                TensorFlow AI Service Partners offer a range of consulting and
                software solutions to help you innovate faster, solve smarter,
                and scale bigger with TensorFlow.
              </p>
            </Welcome>
            <RowBox>
              <ExploreContent
                src={tile_tfaisp}
                title="Connect with a TensorFlow AI Service Partner"
                text="Explore our collection of AI Service Partners who have experience helping businesses implement AI/ML and TensorFlow-based solutions."
              />
            </RowBox>
            <Drivider />
          </div>
        </Content>
        <Content className="tensorsite-group">
          <div>
            <Welcome>
              <h2>TensorFlow를 사용하는 기업</h2>
              <span>우수사례 보기</span>
            </Welcome>
            <RowBox around width="100%">
              {Logos.map((data) => (
                <img src={data.logo} height="65px" />
              ))}
            </RowBox>
            <Button>더보기</Button>
            <Drivider />
          </div>
        </Content>
        <Content className="tensorsite-group">
          <div>
            <Welcome>
              <h2>뉴스 및 공지 사항</h2>
              <p>
                <Link href="">
                  <strong>TensorFlow</strong> 블로그
                </Link>
                에서 더 많은 소식을 확인하고, 월간 TensorFlow 뉴스레터를
                구독하여 최신 공지사항을 받은편지함에서 바로 받아 보세요.
              </p>
              <span className="rotate">가입</span>
            </Welcome>
            <RowBox around>
              <Toolbox
                news
                src={deeplearning}
                title="Enroll in the DeepLearning.AI TensorFlow: Advanced Techniques Specialization"
                subtitle="November 18, 2020"
                text="Ready to expand your TensorFlow skills? Customize your model architecture and build real-world computer vision and generative deep learning applications in this 4-course Specialization on Coursera."
              />
              <Toolbox
                news
                src={community}
                title="공식 @TensorFlow 트위터 채널에서 작업물을 공유해 보세요."
                subtitle="2020년 10월 21일"
                text="TensorFlow 프로젝트를 제출하여 #TFCommunitySpotlight에 소개되고 기념품을 받고 Tensorflow 팀원을 만날 수 있는 기회에 도전해 보세요."
              />
              <Toolbox
                news
                src={interduce}
                title="Responsible AI 관행을 ML위크플로에 통합"
                subtitle="2020년 6월 29일"
                text="TensorFlow는 리소스 및 도구를 ML 커뮤니티와 공유하며 Responsible AI 개발이 이루어지도록 하기 위해 노력하고 있습니다."
              />
              <Toolbox
                news
                src={tfaisp}
                title="TensorFlow 개발자 인증 프로그램을 통해 다른 지원자와 차별화하세요"
                text="빠르게 성장하는 AI 기반 글로벌 구직 시장에서 머신러닝에 대한 전문성을 활용하려는 실무자라면 TensorFlow 인증 프로그램을 확인해 보세요."
                subtitle="March 10,2020"
              />
            </RowBox>
            <Drivider />
          </div>
        </Content>
        <Content className="tensorsite-group">
          <div>
            <Welcome>
              <h2>리소스 및 커뮤니티 지원</h2>
              <p>
                개방적이고 화기애애한 ML 커뮤니티를 육성하기 위해 최선을 다하고
                있습니다. TensorFlow 커뮤니티에 가입하고 생태계 성장에
                참여하세요.
              </p>
              <span>커뮤니티</span>
            </Welcome>
            <RowBox width="75%">
              <ResourceContent
                title="책임감 있는 AI DevPost  챌린지"
                icon="launch"
                text="TensorFlow 2.2를 사용하여 AI 원칙을 바탕으로 모델 또는 애플리케이션을 빌드해 보세요. 빌드하면서 공정성, 개인정보 보호, 보안에 관한 질문을 던져 보세요."
              />
              <ResourceContent
                title="TensorFlow 블로그"
                icon="subject"
                text="TensorFlow팀의 콘텐츠 및 커뮤니티의 최고 인기 글 등을 정기적으로 TensorFlow 블로그에 게시합니다."
              />
              <ResourceContent
                title="연구를 위한 강력한 실험"
                icon=""
                text="YouTube 채널은 TensorFlow를 이용한 머신러닝 및 AI에 중점을 둡니다. TensorFlow Meets, Ask TensorFlow 및 Coding TensorFlow를 포함한 여러 가지 새로운 동영상을 살펴보세요."
              />
              <ResourceContent
                title="Twitter"
                icon=""
                text="커뮤니티 및 TensorFlow팀의 최신 뉴스와 업데이트를 받아보려면 Twitter에서 @tensorflow를 팔로우하세요."
              />
              <ResourceContent
                title="TensorFlow 공지 사항"
                icon="email"
                text="TensorFlow팀에서 제공하는 최신 버전 업데이트, 보안 권고 사항 및 기타 중요한 정보를 받아보려면 TensorFlow 공지 메일링 리스트에 가입하세요."
              />
            </RowBox>
            <Welcome>
              <h2>TensorFlow 월간 뉴스레터 가입</h2>
              <span className="rotate">가입</span>
            </Welcome>
          </div>
        </Content>
        <Content className="tensorsite-group">
          <div className="right" />
          <div className="left" />
          <div className="footer">
            <img src={footImg} alt="" />
            <Welcome>
              <h2 style={{ color: "white" }}>
                TensorFlow를 사용하여 손쉽게 빌드, 배포, 실험
              </h2>
              <button>시작하기</button>
            </Welcome>
          </div>
        </Content>
      </Wrap>
      <Footer />
    </>
  );
}
const Wrap = styled.div`
  /* display: flex;
  flex-direction: column; */
  width: 100%;
  height: 100%;
`;
const Content = styled.section`
  position: relative;
  & > div {
    margin: 80px auto;
    max-width: 1420px;
    padding: 0 40px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  & > .left {
    margin: 0px;
    padding: 0px;
    position: absolute;
    background: #ff6f00;
    width: 192px;
    /* height: 100%; */
    left: 0;
    bottom: 0;
    top: 92px;
    height: calc(100%-92px);
    &:before {
      content: "";
      display: block;
      height: 92px;
      margin-top: -92px;
      width: 100%;
      background-image: url(${up});
    }
  }
  & > .right {
    margin: 0px;
    padding: 0px;
    position: absolute;
    background: #ff9100;
    right: 0;
    width: 192px;
    height: 100%;
    bottom: 0;
    &:before {
      content: "";
      display: block;
      height: 92px;
      margin-top: -92px;
      width: 100%;
      background-image: url(${down});
    }
  }
  & > .footer {
    background-image: linear-gradient(-90deg, #ff9100 18%, #ff6f00 86%);
    min-height: 350px;
    padding: 70px 0;
    margin: 0px auto;
    position: relative;
    max-width: 1140px;

    & > img {
      position: absolute;
      bottom: 0;
    }
  }
`;

const Welcome = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 30px 50px;
  & > h2 {
    font-family: "Google Sans", sans-serif;
    font-size: 30px;
    font-weight: 700;
    line-height: 40px;
    color: ${colors.softBlack};
  }
  & > p {
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    line-height: 26px;
    text-align: center;
    margin: 10px auto;
    width: 55%;
    margin-bottom: 8px;
  }
  & > span {
    margin-top: 16px;
    position: relative;
    color: ${colors.softBlack};
    font-weight: 600;
    transition: color 0.5s;
    &::after {
      transition: transform 0.5s;
      font-family: "Material Icons";
      content: "arrow_forward";
      position: absolute;
    }
    &:hover {
      color: ${colors.softPrimary};
      &::after {
        transform: translateX(4px);
      }
    }
  }
  & > .rotate {
    &::after {
      transition: transform 0.5s;
      font-family: "Material Icons";
      content: "north_east";
      position: absolute;
    }
  }
  & > button {
    border: none;
    border-radius: 5px;
    background: white;
    color: ${colors.softBlack};
    font-family: "Google Sans", sans-serif;
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;
    padding: 10px 14px;
    margin-top: 40px;
    transition: color 0.5s, background 0.5s;
    &:hover {
      background: ${colors.softBlack};
      color: white;
    }
  }
`;

const Link = styled.a`
  color: #616161;
  transition: color 0.5s;
  line-height: 20px;
  border-bottom: 1px solid #ff6f00;
  &:hover {
    color: ${colors.softPrimary};
  }
`;

export default App;
