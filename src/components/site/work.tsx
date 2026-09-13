"use client";

import styled from "styled-components";
import { color, font, media } from "@/styles/tokens";
import { featuredWork, moreWork, type Engagement } from "@/content/clients";
import { Card, Chip, ChipRow, Container, Display, Eyebrow, Lede, Section } from "./ui";

const Band = styled(Section)`
  border-top: 1px solid ${color.lineSoft};
  border-bottom: 1px solid ${color.lineSoft};
`;

const Header = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 56px;
  align-items: end;
  margin-bottom: 54px;

  ${media.tablet} {
    grid-template-columns: minmax(0, 1fr);
    gap: 16px;
    margin-bottom: 34px;
  }
`;

const Row = styled.div<{ $columns: number }>`
  display: grid;
  grid-template-columns: repeat(${({ $columns }) => $columns}, minmax(0, 1fr));
  gap: 22px;

  & + & {
    margin-top: 22px;
  }

  ${media.tablet} {
    grid-template-columns: minmax(0, 1fr);
    gap: 16px;

    & + & {
      margin-top: 16px;
    }
  }
`;

const Entry = styled(Card)<{ $wide?: boolean }>`
  padding: ${({ $wide }) => ($wide ? "32px" : "28px")};

  ${media.phone} {
    padding: 24px;
  }
`;

const Head = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 8px;
`;

const Client = styled.div<{ $wide?: boolean }>`
  font-size: ${({ $wide }) => ($wide ? "27px" : "22px")};
  font-weight: 700;
  letter-spacing: -0.02em;

  ${media.phone} {
    font-size: 24px;
  }
`;

const Years = styled.div`
  font-family: ${font.mono};
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${color.accent};
  white-space: nowrap;

  ${media.phone} {
    font-size: 10.5px;
  }
`;

const Sector = styled.div<{ $wide?: boolean }>`
  font-size: ${({ $wide }) => ($wide ? "13px" : "12px")};
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: ${color.dim};
  margin-bottom: ${({ $wide }) => ($wide ? "18px" : "16px")};

  ${media.phone} {
    font-size: 12px;
    margin-bottom: 15px;
  }
`;

const Summary = styled.p<{ $wide?: boolean }>`
  margin: 0 0 ${({ $wide }) => ($wide ? "22px" : "20px")};
  font-size: ${({ $wide }) => ($wide ? "15.5px" : "14.5px")};
  line-height: 1.62;
  color: ${({ $wide }) => ($wide ? color.muted : "#a3a3a3")};
  text-wrap: pretty;

  ${media.phone} {
    margin-bottom: 18px;
    font-size: 15px;
    line-height: 1.6;
  }
`;

function EngagementCard({ engagement, wide }: { engagement: Engagement; wide?: boolean }) {
  return (
    <Entry $wide={wide}>
      <Head>
        <Client $wide={wide}>{engagement.client}</Client>
        <Years>{engagement.years}</Years>
      </Head>
      <Sector $wide={wide}>{engagement.sector}</Sector>
      <Summary $wide={wide}>{engagement.summary}</Summary>
      <ChipRow>
        {engagement.stack.map((item) => (
          <Chip key={item}>{item}</Chip>
        ))}
      </ChipRow>
    </Entry>
  );
}

export function Work() {
  return (
    <Band id="work" $deep>
      <Container>
        <Header>
          <div>
            <Eyebrow>Selected work</Eyebrow>
            <Display>Where the code went.</Display>
          </div>
          <Lede>
            Most of it sits behind a login, on a desk, in a control room. What follows is what it
            does and what it was built with.
          </Lede>
        </Header>
        <Row $columns={2}>
          {featuredWork.map((engagement) => (
            <EngagementCard key={engagement.client} engagement={engagement} wide />
          ))}
        </Row>
        <Row $columns={3}>
          {moreWork.map((engagement) => (
            <EngagementCard key={engagement.client} engagement={engagement} />
          ))}
        </Row>
      </Container>
    </Band>
  );
}
