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

const Install = styled.div`
  margin-top: 34px;
  border: 1px solid ${color.lineChip};
  border-radius: 9px;
  background: ${color.cardInset};
  padding: 18px 20px;
  display: flex;
  flex-direction: column;
  gap: 11px;

  ${media.phone} {
    margin-top: 30px;
    padding: 16px;
  }
`;

const Command = styled.div`
  font-family: ${font.mono};
  font-size: 13px;
  line-height: 1.5;
  color: #d4d4d4;
  overflow-wrap: anywhere;

  &::before {
    content: "$ ";
    color: ${color.accent};
  }

  ${media.phone} {
    font-size: 12px;
  }
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 26px;

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

export function Pitupitu() {
  return (
    <Section id="pitupitu">
      <Grid>
        <Intro>
          <Badge>NEW — OUR OWN PRODUCT</Badge>
          <Name>
            <Icon src="/pitupitu/icon.png" alt="" width={256} height={256} />
            pitupitu
          </Name>
          <Headline>Talk to your coding agents, on any of your machines.</Headline>
          <Copy>
            Say what you want done and where. pitupitu starts the agent session on that machine,
            keeps an eye on it, answers what it can, and tells you when it is done or needs you. In
            the car, on a walk, at the desk: the same sessions, from your phone or any browser.
          </Copy>
        </Intro>

        <Shot>
          <Frame>
            <Chrome>
              <span />
              <span />
              <span />
              pitupitu.chat
            </Chrome>
            <Screenshot
              src="/pitupitu/talk.jpg"
              alt="The pitupitu talk page: what needs you on the left, the conversation with pitupitu on the right"
              width={1400}
              height={875}
              sizes="(max-width: 1220px) 100vw, 652px"
              priority
            />
          </Frame>
          <Caption>
            The talk page: what needs you on the left, every machine at once; the conversation on
            the right, by voice or typed.
          </Caption>
        </Shot>

        <Detail>
          <Points>
            <Point>
              <svg {...iconProps}>
                <rect x="7" y="2.5" width="6" height="10" rx="3" />
                <path d="M4.5 10a5.5 5.5 0 0011 0M10 15.5v2.5" />
              </svg>
              <div>
                <PointTitle>Your agents, by voice</PointTitle>
                <PointBody>
                  Start, check on and unblock Claude Code, Codex, OpenCode and more, from your
                  phone, the iOS and Android apps or any browser.
                </PointBody>
              </div>
            </Point>
            <Point>
              <svg {...iconProps}>
                <rect x="2.5" y="4" width="15" height="10" rx="1.6" />
                <path d="M7 17h6M10 14v3" />
              </svg>
              <div>
                <PointTitle>The desk sees what the phone does</PointTitle>
                <PointBody>
                  Sessions run in herdr on your own machine. Open it at the desk and you see the
                  same sessions, live, to watch or type into.
                </PointBody>
              </div>
            </Point>
            <Point>
              <svg {...iconProps}>
                <rect x="3.5" y="8.5" width="13" height="8.5" rx="1.6" />
                <path d="M6.5 8.5V6a3.5 3.5 0 017 0v2.5" />
              </svg>
              <div>
                <PointTitle>Your subscriptions, no API keys</PointTitle>
                <PointBody>
                  Claude Code runs on your Claude plan, Codex on your ChatGPT plan. pitupitu never
                  reads or proxies their credentials.
                </PointBody>
              </div>
            </Point>
          </Points>

          <Install>
            <Command>curl -fsSL https://pitupitu.chat/install | sh</Command>
            <Command>brew install klarluft/tap/pitupitu</Command>
          </Install>

          <Footer>
            <SiteLink href={links.pitupitu}>
              pitupitu.chat
              <ArrowOut />
            </SiteLink>
            <License>Open-source connector · Apache-2.0</License>
          </Footer>
        </Detail>
      </Grid>
    </Section>
  );
}
