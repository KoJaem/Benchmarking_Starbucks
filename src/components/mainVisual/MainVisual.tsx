import styled from "@emotion/styled";
import { useState } from "react";
import { Button } from "../Atoms";
import { useEffect } from "react";

export function MainVisual() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <Wrapper>
      <MainWrapper>
        <TextImageWrapper>
          <img
            src="https://image.istarbucks.co.kr/upload/common/img/main/2022/2022_Spring_main_slogan.png"
            alt="season"
          />
        </TextImageWrapper>
        <ButtonWrapper>
          <Button borderColor="pink" fontColor="pink">
            자세히 보기
          </Button>
        </ButtonWrapper>
        <MainProducts>
          <Product1 show={show}>
            <img
              src="https://image.istarbucks.co.kr/upload/common/img/main/2022/2022_Spring_main_ChouxCreamLatte.png"
              alt="product"
            />
          </Product1>
          <Product2 show={show}>
            <img
              src="https://image.istarbucks.co.kr/upload/common/img/main/2022/2022_Spring_main_PinkMagnolia.png"
              alt="product"
            />
          </Product2>
          <Product3 show={show}>
            <img
              src="https://image.istarbucks.co.kr/upload/common/img/main/2022/2022_Spring_main_GreenYogurt.png"
              alt="product"
            />
          </Product3>
        </MainProducts>
      </MainWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding-top: 120px;
  background: url("https://image.istarbucks.co.kr/upload/common/img/main/2022/2022_Spring_main_bg.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 646px;
`;

const MainWrapper = styled.div`
  max-width: 1130px;
  position: relative;
  box-sizing: border-box;
  height: 100%;
  margin: 0 auto;
`;

const TextImageWrapper = styled.div`
  position: absolute;
  top: 9.1%;
  left: 6px;
  text-align: center;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  top: 39%;
  left: 7px;
  width: 355px;
`;

const MainProducts = styled.div`
  height: 100%;
`;

type AnimationProps = {
  show: boolean;
};
const Product1 = styled.div<AnimationProps>`
  position: absolute;
  top: 25.9%;
  left: 22%;
  width: 49%;
  max-width: 550px;
  z-index: 8;
  opacity: ${({ show }) => (show ? 1 : 0)};
  transition: opacity 500ms ease;
  transition-delay: 1000ms;
`;

const Product2 = styled.div<AnimationProps>`
  position: absolute;
  top: 5.1%;
  left: 39.6%;
  width: 53%;
  max-width: 594px;
  z-index: 7;
  opacity: ${({ show }) => (show ? 1 : 0)};
  transition: opacity 500ms ease;
  transition-delay: 1500ms;
`;

const Product3 = styled.div<AnimationProps>`
  position: absolute;
  top: 19.2%;
  right: -11.2%;
  width: 38%;
  max-width: 425px;
  z-index: 9;
  opacity: ${({ show }) => (show ? 1 : 0)};
  transition: opacity 500ms ease;
  transition-delay: 2000ms;
`;
