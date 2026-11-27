"use client";

import Image from "next/image";
import styled from "styled-components";
import { color, font, media } from "@/styles/tokens";
import { links } from "@/content/company";
import { ArrowOut, Container, Section } from "./ui";

const Grid = styled(Container)`
  display: grid;
  grid-template-columns: 452px minmax(0, 1fr);
  grid-template-areas:
    "intro shot"
    "detail shot";
  column-gap: 56px;
  align-items: start;

  ${media.tablet} {
    grid-template-columns: minmax(0, 1fr);
    grid-template-areas:
      "intro"
      "shot"
      "detail";
  }
`;

const Intro = styled.div`
  grid-area: intro;
`;

const Detail = styled.div`
  grid-area: detail;
`;

const Shot = styled.div`
  grid-area: shot;

  ${media.tablet} {
    margin-top: 28px;
  }
`;

const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 9px;
  background: rgba(53, 211, 255, 0.1);
  border: 1px solid rgba(53, 211, 255, 0.34);
  border-radius: 999px;
  padding: 6px 13px 6px 11px;
  margin-bottom: 26px;
  font-family: ${font.mono};
  font-size: 10.5px;
  font-weight: 500;
  letter-spacing: 0.14em;
  color: ${color.accent};

  &::before {
    content: "";
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${color.accent};
  }

  ${media.phone} {
    margin-bottom: 22px;
    font-size: 10px;
  }
`;

const Name = styled.div`
  display: flex;
  align-items: center;
  gap: 13px;
  margin-bottom: 16px;
  font-size: 34px;
  font-weight: 700;
  letter-spacing: -0.025em;

  ${media.phone} {
    gap: 11px;
    margin-bottom: 12px;
    font-size: 28px;
  }
`;

const Icon = styled(Image)`
  width: 40px;
  height: 40px;
  border-radius: 9px;

  ${media.phone} {
    width: 34px;
    height: 34px;
    border-radius: 8px;
  }
`;

const Headline = styled.h2`
  margin: 0;
  font-family: ${font.display};
  font-size: 41px;
  line-height: 1.1;
  font-weight: 700;
  font-style: italic;
  letter-spacing: -0.028em;
  text-wrap: pretty;

  ${media.phone} {
    font-size: 30px;
    line-height: 1.12;
  }
`;

const Copy = styled.p`
  margin: 24px 0 0;
  font-size: 16.5px;
  line-height: 1.65;
  color: ${color.muted};
  text-wrap: pretty;

  ${media.phone} {
    margin-top: 20px;
    font-size: 15.5px;
  }
`;

const Points = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 34px;

  ${media.tablet} {
    margin-top: 32px;
  }
`;

const Point = styled.div`
  display: flex;
  gap: 14px;
  align-items: flex-start;

  svg {
    flex-shrink: 0;
    margin-top: 2px;
  }
`;

const PointTitle = styled.div`
  font-size: 15px;
  font-weight: 700;
  margin-bottom: 4px;
`;

const PointBody = styled.div`
  font-size: 14.5px;
  line-height: 1.55;
  color: ${color.mutedSoft};
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 34px;

  ${media.phone} {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    margin-top: 22px;
  }
`;

const SiteLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 15px;
  font-weight: 700;
`;

const License = styled.span`
  font-size: 13.5px;
  color: #6e6e6e;
`;

const Frame = styled.div`
  position: relative;
  border: 1px solid #242424;
  border-radius: 12px;
  overflow: hidden;
  background: ${color.card};
  box-shadow: 0 30px 70px rgba(0, 0, 0, 0.6);

  ${media.phone} {
    border-radius: 11px;
    box-shadow: none;
  }
`;

const Chrome = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 12px 15px;
  border-bottom: 1px solid #1d1d1d;
  background: #101010;
  font-family: ${font.mono};
  font-size: 11px;
  color: #616161;

  span {
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: #2e2e2e;
  }

  span:last-of-type {
    margin-right: 10px;
  }

  ${media.phone} {
    gap: 6px;
    padding: 10px 13px;
    font-size: 10px;

    span {
      width: 8px;
      height: 8px;
    }
  }
`;

const Screenshot = styled(Image)`
  display: block;
  width: 100%;
  height: auto;
`;

const Caption = styled.div`
  display: flex;
  gap: 10px;
  align-items: flex-start;
  margin-top: 16px;
  font-size: 13.5px;
  line-height: 1.5;
  color: #7a7a7a;

  &::before {
    content: "—";
    color: ${color.accent};
  }

  ${media.phone} {
    margin-top: 14px;
    font-size: 13px;
  }
`;

const iconProps = {
  width: 20,
  height: 20,
  viewBox: "0 0 20 20",
  fill: "none",
  stroke: color.accent,
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function Dataklar() {
  return (
    <Section id="dataklar">
      <Grid>
        <Intro>
          <Badge>ALSO OURS — ENERGY MARKET INTELLIGENCE</Badge>
          <Name>
            <Icon src="/dataklar/icon.png" alt="" width={180} height={180} />
            dataKlar
          </Name>
          <Headline>Europe&apos;s power grid, read live and explained.</Headline>
          <Copy>
            Prices, cross-border flows, plant outages, grid works, balancing and forecasts arrive
            from grid operators and market platforms all day — late, incomplete, and often
            contradicting each other. dataKlar collects them around the clock, keeps every claim
            with its source and the moment it was published, and turns them into live dashboards
            for trading desks and energy companies.
          </Copy>
        </Intro>

        <Shot>
          <Frame>
            <Chrome>
              <span />
              <span />
              <span />
              dataklar.com
            </Chrome>
            <Screenshot
              src="/dataklar/grid.jpg"
              alt="The dataKlar live grid: net power flows between eight European market zones, zones outlined by whether their grid is short or long, power plants as points of light"
              width={1400}
              height={875}
              sizes="(max-width: 1220px) 100vw, 652px"
              priority={false}
            />
          </Frame>
          <Caption>
            The live grid on dataklar.com: net power flows across twelve borders, whether each
            zone&apos;s grid is short or long of power, and grid works on the cables. Data: ENTSO-E
            Transparency Platform and JRC Open Power Plants Database, both CC BY 4.0.
          </Caption>
        </Shot>

        <Detail>
          <Points>
            <Point>
              <svg {...iconProps}>
                <path d="M3 6l7-3.5L17 6l-7 3.5L3 6z" />
                <path d="M3 10l7 3.5 7-3.5M3 14l7 3.5 7-3.5" />
              </svg>
              <div>
                <PointTitle>Every claim, with its source</PointTitle>
                <PointBody>
                  Raw data is kept exactly as it arrived, and every fact carries where and when it
                  came from, so any moment can be replayed.
                </PointBody>
              </div>
            </Point>
            <Point>
              <svg {...iconProps}>
                <path d="M10 2.5l7.5 7.5-7.5 7.5L2.5 10 10 2.5z" />
                <path d="M10 6.5v4.5M10 13.5v.01" />
              </svg>
              <div>
                <PointTitle>Disagreement is a signal</PointTitle>
                <PointBody>
                  When an outage notice says a plant is off while it is producing, or two sources
                  give different numbers, dataKlar flags it instead of quietly picking one.
                </PointBody>
              </div>
            </Point>
            <Point>
              <svg {...iconProps}>
                <rect x="2.5" y="3.5" width="15" height="10.5" rx="1.6" />
                <path d="M5.5 11l3-3 2.5 2 3.5-4M7 17h6" />
              </svg>
              <div>
                <PointTitle>Live, built for the desk</PointTitle>
                <PointBody>
                  Prices, flows, outages, balancing and forecasts across European market zones,
                  refreshed every 15 minutes, on dashboards shaped around how you decide.
                </PointBody>
              </div>
            </Point>
          </Points>

          <Footer>
            <SiteLink href={links.dataklar}>
              dataklar.com
              <ArrowOut />
            </SiteLink>
            <License>Private preview · for trading desks</License>
          </Footer>
        </Detail>
      </Grid>
    </Section>
  );
}
