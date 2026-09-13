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

export function GitWarren() {
  return (
    <Section id="gitwarren">
      <Grid>
        <Intro>
          <Badge>NEW — OUR OWN PRODUCT</Badge>
          <Name>
            <Icon src="/gitwarren/icon.png" alt="" width={128} height={128} />
            GitWarren
          </Name>
          <Headline>Review what your agents wrote, before GitHub ever sees it.</Headline>
          <Copy>
            An agent finishes a task and leaves you a worktree full of changes that aren&apos;t
            committed yet. Every other review tool waits for a pull request. GitWarren reads that
            worktree directly — staged, unstaged and untracked — on whichever of your machines it
            is on.
          </Copy>
        </Intro>

        <Shot>
          <Frame>
            <Chrome>
              <span />
              <span />
              <span />
              gitwarren — klarluft/gitwarren-app
            </Chrome>
            <Screenshot
              src="/gitwarren/review.jpg"
              alt="A GitWarren review with staged, unstaged and untracked work folded into one diff"
              width={1400}
              height={933}
              sizes="(max-width: 1220px) 100vw, 652px"
              priority={false}
            />
          </Frame>
          <Caption>
            A review of a branch whose work is still uncommitted: staged, unstaged and untracked
            changes folded into one diff, read straight from git at the moment it is shown.
          </Caption>
        </Shot>

        <Detail>
          <Points>
            <Point>
              <svg {...iconProps}>
                <rect x="3.5" y="8.5" width="13" height="8.5" rx="1.6" />
                <path d="M6.5 8.5V6a3.5 3.5 0 017 0v2.5" />
              </svg>
              <div>
                <PointTitle>Local by construction</PointTitle>
                <PointBody>
                  Reviews live on the machine the code is on, and stay there. No account, no
                  server, nothing replicated anywhere you don&apos;t own.
                </PointBody>
              </div>
            </Point>
            <Point>
              <svg {...iconProps}>
                <rect x="6" y="6" width="8" height="8" rx="1.4" />
                <path d="M8 3v3M12 3v3M8 14v3M12 14v3M3 8h3M3 12h3M14 8h3M14 12h3" />
              </svg>
              <div>
                <PointTitle>Agents in the loop, always attributed</PointTitle>
                <PointBody>
                  Seventeen MCP tools let a local agent take part in the review. A machine-written
                  comment is always marked as one.
                </PointBody>
              </div>
            </Point>
            <Point>
              <svg {...iconProps}>
                <rect x="2.5" y="5" width="11" height="9" rx="1.6" />
                <path d="M6.5 16.5h9a2 2 0 002-2v-7" />
              </svg>
              <div>
                <PointTitle>Two shells, one review</PointTitle>
                <PointBody>
                  A desktop app on macOS, Windows and Linux — or the same UI served into a browser
                  tab, for a box with no screen at all.
                </PointBody>
              </div>
            </Point>
          </Points>

          <Install>
            <Command>brew install --cask klarluft/tap/gitwarren</Command>
            <Command>npx gitwarren serve</Command>
          </Install>

          <Footer>
            <SiteLink href={links.gitwarren}>
              gitwarren.com
              <ArrowOut />
            </SiteLink>
            <License>Free and open source · GPL-3.0</License>
          </Footer>
        </Detail>
      </Grid>
    </Section>
  );
}
