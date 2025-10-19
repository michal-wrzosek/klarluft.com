import React, { memo, useEffect, useRef } from "react";
import styled from "styled-components";
import { background } from "./background";

const Address = styled.p`
  width: 165px;
  height: 92px;
  font-size: 16px;
  font-weight: 300;
  font-style: italic;
  color: #fff;
  -webkit-font-smoothing: antialiased;
  margin: 40px 0 0 0;

  a:link,
  a:visited {
    color: #fff;
    text-decoration: underline;
  }
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
  font-size: 50px;
  font-weight: 900;
  font-style: italic;
  color: #fff;
  -webkit-font-smoothing: antialiased;
  margin: 0 0 0 0;
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

  useEffect(() => {
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
          Klarluft BV
          <br />
          {atob("VmFuIEFlcnNzZW5sYWFuIDQwQw==")}
          <br />
          {atob("MzAzOUtFIFJvdHRlcmRhbQ==")}
          <br />
          {atob("VGhlIE5ldGhlcmxhbmRz")}
          <br />
          <br />
          {atob("VkFUOiBOTDg2NDEyODkxNUIwMQ==")}
          <br />
          {atob("S1ZLOiA4Njg3NTU5MA==")}
          <br />
          <br />
          {atob("Y29udGFjdEBrbGFybHVmdC5jb20=")}
          <br />
          <br />
          More info:
          <br />
          <a href="https://michal.wrzosek.pl">michal.wrzosek.pl</a>
        </Address>
      </TextContainer>
    </Container>
  );
});
