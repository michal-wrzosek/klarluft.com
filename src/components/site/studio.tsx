"use client";

import styled from "styled-components";
import { color, font, media } from "@/styles/tokens";
import { Container, Display, Eyebrow, Section } from "./ui";

const Title = styled(Display)`
  margin-bottom: 52px;
  max-width: 620px;

  ${media.phone} {
    margin-bottom: 36px;
  }
`;

const Columns = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;

  ${media.tablet} {
    grid-template-columns: minmax(0, 1fr);
    gap: 30px;
  }
`;

const Column = styled.div`
  border-top: 1px solid ${color.lineStrong};
  padding-top: 26px;

  ${media.phone} {
    padding-top: 22px;
  }
`;

const Number = styled.div`
  font-family: ${font.mono};
  font-size: 11px;
  color: ${color.accent};
  margin-bottom: 16px;

  ${media.phone} {
    font-size: 10.5px;
    margin-bottom: 12px;
  }
`;

const Heading = styled.h3`
  margin: 0 0 14px;
  font-size: 21px;
  font-weight: 700;
  letter-spacing: -0.015em;
  line-height: 1.25;

  ${media.phone} {
    margin-bottom: 11px;
    font-size: 20px;
  }
`;

const Body = styled.p`
  margin: 0;
  font-size: 15.5px;
  line-height: 1.62;
  color: #a3a3a3;
  text-wrap: pretty;

  ${media.phone} {
    font-size: 15px;
    line-height: 1.6;
  }
`;

const points = [
  {
    heading: "Domains where being wrong is expensive",
    body: "Trading desks, grid balancing, clinical records. Systems where a rounding error is a position, a patient or a regulator. We are comfortable being the ones who ask what happens at the edge of the range.",
  },
  {
    heading: "Years, not sprints",
    body: "Five years inside Shell's trading department, not five weeks. We join a team, learn the domain properly, and stay long enough that the decisions are ours to live with.",
  },
  {
    heading: "Products, not just tickets",
    body: "GitWarren is ours end to end: three operating systems, code signing and notarisation, silent auto-update, a Homebrew tap, an MCP server. We know what shipping actually costs, because we pay it.",
  },
];

export function Studio() {
  return (
    <Section id="studio">
      <Container>
        <Eyebrow>The studio</Eyebrow>
        <Title>What we&apos;re good for.</Title>
        <Columns>
          {points.map((point, index) => (
            <Column key={point.heading}>
              <Number>{String(index + 1).padStart(2, "0")}</Number>
              <Heading>{point.heading}</Heading>
              <Body>{point.body}</Body>
            </Column>
          ))}
        </Columns>
      </Container>
    </Section>
  );
}
