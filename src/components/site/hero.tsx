"use client";

import { useRef } from "react";
import Image from "next/image";
import styled from "styled-components";
import { color, font, media } from "@/styles/tokens";
import { company } from "@/content/company";
import { clientLogos } from "@/content/clients";
import { Starfield, type StarfieldRef } from "@/components/starfield/starfield";
import { Nav } from "./nav";
import { ArrowRight, Container } from "./ui";

const Section = styled.header`
  position: relative;
  background: ${color.black};
  overflow: hidden;
  border-bottom: 1px solid #1c1c1c;
`;

const Glow = styled.div`
  position: absolute;
  top: -180px;
  left: 50%;
  width: 1100px;
  height: 800px;
  margin-left: -550px;
  background: radial-gradient(ellipse at center, rgba(53, 211, 255, 0.06), rgba(53, 211, 255, 0) 62%);
  pointer-events: none;

  ${media.phone} {
    top: -120px;
    width: 520px;
    height: 520px;
    margin-left: -260px;
    background: radial-gradient(ellipse at center, rgba(53, 211, 255, 0.07), rgba(53, 211, 255, 0) 62%);
  }
`;

const Fade = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 220px;
  background: linear-gradient(180deg, rgba(10, 10, 10, 0), ${color.bg});
  pointer-events: none;

  ${media.phone} {
    height: 160px;
  }
`;

const Body = styled(Container)`
  position: relative;
  padding-top: 132px;
  text-align: center;

  ${media.phone} {
    padding-top: 62px;
  }
`;

const Title = styled.h1`
  margin: 0;
  font-family: ${font.display};
  font-size: 80px;
  line-height: 0.99;
  font-weight: 700;
  font-style: italic;
  letter-spacing: -0.03em;

  ${media.tablet} {
    font-size: 64px;
  }

  ${media.phone} {
    font-size: 43px;
    line-height: 1;
  }
`;

const Lede = styled.p`
  margin: 32px auto 0;
  max-width: 740px;
  font-size: 19px;
  line-height: 1.6;
  color: #b0b0b0;
  text-wrap: pretty;

  ${media.phone} {
    margin-top: 24px;
    font-size: 16px;
  }
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 22px;
  margin-top: 42px;

  ${media.phone} {
    flex-direction: column;
    align-items: stretch;
    gap: 14px;
    margin-top: 30px;
  }
`;

const Primary = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background: ${color.accent};
  color: ${color.accentInk};
  font-size: 15px;
  font-weight: 700;
  padding: 15px 26px;
  border-radius: 7px;
  transition: background 120ms ease;

  &:hover {
    background: ${color.accentHover};
    color: ${color.accentInk};
  }

  ${media.phone} {
    font-size: 16px;
    padding: 16px 22px;
    border-radius: 8px;
  }
`;

const Secondary = styled.a`
  font-size: 15px;
  font-weight: 600;
  color: ${color.text};
  border-bottom: 1px solid #4a4a4a;
  padding-bottom: 3px;

  &:hover {
    color: ${color.text};
    border-bottom-color: ${color.text};
  }

  ${media.phone} {
    display: flex;
    justify-content: center;
    font-size: 16px;
    padding: 16px 22px;
    border: 1px solid #333333;
    border-radius: 8px;
  }
`;

const Wall = styled.div`
  margin-top: 92px;
  border-top: 1px solid #1f1f1f;

  ${media.phone} {
    margin-top: 46px;
  }
`;

const WallLabel = styled.div`
  font-family: ${font.mono};
  font-size: 11px;
  letter-spacing: 0.16em;
  color: ${color.faint};
  padding: 22px 0 4px;

  ${media.phone} {
    font-size: 10px;
    letter-spacing: 0.14em;
    padding: 20px 0 6px;
  }
`;

const WallGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));

  ${media.phone} {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

const WallCell = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 92px;
  border-left: 1px solid #1a1a1a;

  &:first-child {
    border-left: 0;
  }

  ${media.phone} {
    height: 74px;

    &:nth-child(3n + 1) {
      border-left: 0;
    }

    &:nth-child(n + 4) {
      border-top: 1px solid #1a1a1a;
    }
  }
`;

const Logo = styled(Image)<{ $size: number; $phoneSize: number; $invert?: boolean }>`
  height: ${({ $size }) => $size}px;
  width: auto;
  opacity: 0.74;
  filter: ${({ $invert }) => ($invert ? "brightness(0) invert(1)" : "none")};
  transition: opacity 160ms ease;

  ${WallCell}:hover & {
    opacity: 1;
  }

  ${media.phone} {
    height: ${({ $phoneSize }) => $phoneSize}px;
  }
`;

export function Hero() {
  const starfield = useRef<StarfieldRef>(null);

  return (
    <Section id="top">
      <Starfield ref={starfield} />
      <Glow />
      <Fade />
      <Nav />
      <Body>
        <Title>
          Trading floors.
          <br />
          Power grids.
          <br />
          Patient records.
        </Title>
        <Lede>
          Klarluft is an independent engineering studio. We work inside trading departments,
          energy desks and clinical systems. The same hands now ship a product of our own.
        </Lede>
        <Actions>
          <Primary href="#gitwarren" onPointerEnter={() => starfield.current?.warp(1400)}>
            Meet GitWarren
            <ArrowRight />
          </Primary>
          <Secondary href={`mailto:${company.email}`}>Talk to us about a project</Secondary>
        </Actions>

        <Wall>
          <WallLabel>SELECTED CLIENTS</WallLabel>
          <WallGrid>
            {clientLogos.map((logo) => (
              <WallCell key={logo.name}>
                <Logo
                  src={logo.src}
                  alt={logo.name}
                  width={logo.width}
                  height={logo.height}
                  unoptimized
                  $size={logo.size}
                  $phoneSize={logo.phoneSize}
                  $invert={logo.invert}
                />
              </WallCell>
            ))}
          </WallGrid>
        </Wall>
      </Body>
    </Section>
  );
}
