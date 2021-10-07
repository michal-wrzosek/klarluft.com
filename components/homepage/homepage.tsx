import React, { memo, useEffect, useRef } from "react";
import styled from "styled-components";
import { background } from "./background";

const Address = styled.p`
  width: 165px;
  height: 92px;
  font-size: 20px;
  font-weight: 300;
  font-style: italic;
  color: #fff;
  -webkit-font-smoothing: antialiased;
  margin: 40px 0 0 0;
`;
const SubTitle = styled.h3`
  font-size: 12px;
  font-weight: 900;
  font-style: italic;
  color: #fff;
  -webkit-font-smoothing: antialiased;
  margin: 0;
`;
const Title = styled.h1`
  color: red;
  font-size: 50px;
  font-weight: 900;
  font-style: italic;
  color: #fff;
  -webkit-font-smoothing: antialiased;
  margin: 140px 0 0 0;
`;
const FullPageContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;
const TextContainer = styled(FullPageContainer)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const BackgroundContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;
const Container = styled(FullPageContainer)`
  overflow: hidden;
`;

export const Homepage = memo(function Homepage() {
  const backgroundContainerRef = useRef<HTMLDivElement>(null);
  const isClientSide = typeof window !== "undefined";

  useEffect(() => {
    if (!isClientSide) return;

    const backgroundContainer = backgroundContainerRef.current;
    if (!backgroundContainer) return;

    background(backgroundContainer);
  }, []);

  return (
    <Container as="main">
      <BackgroundContainer ref={backgroundContainerRef} />
      <TextContainer>
        <Title>Klarluft</Title>
        <SubTitle>Software Engineering Services</SubTitle>
        <Address>
          {isClientSide ? (
            <>
              {atob("R2FsdmFuaXN0cmFhdCA3MDc=")}
              <br />
              {atob("MzAyOUFEIFJvdHRlcmRhbQ==")}
              <br />
              {atob("VGhlIE5ldGhlcmxhbmRz")}
              <br />
              {atob("S1ZLOiA4NDEzNjQ1Ng==")}
            </>
          ) : null}
        </Address>
      </TextContainer>
    </Container>
  );
});
