"use client";

import { useState } from "react";
import styled from "styled-components";
import { color, font, media } from "@/styles/tokens";
import { company } from "@/content/company";
import { Container, KMark } from "./ui";

const Bar = styled(Container)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 28px;
  padding-bottom: 28px;

  ${media.phone} {
    padding-top: 18px;
    padding-bottom: 18px;
  }
`;

const Brand = styled.a`
  display: flex;
  align-items: center;
  gap: 12px;
  color: ${color.text};
  font-family: ${font.display};
  font-size: 19px;
  font-weight: 700;
  font-style: italic;
  letter-spacing: -0.005em;

  &:hover {
    color: ${color.text};
  }

  ${media.phone} {
    gap: 10px;
    font-size: 18px;
  }
`;

const Links = styled.div<{ $open: boolean }>`
  display: flex;
  align-items: center;
  gap: 34px;

  ${media.phone} {
    display: ${({ $open }) => ($open ? "flex" : "none")};
    position: absolute;
    top: 100%;
    left: 22px;
    right: 22px;
    flex-direction: column;
    align-items: stretch;
    gap: 4px;
    padding: 10px;
    border: 1px solid #2a2a2a;
    border-radius: 10px;
    background: rgba(10, 10, 10, 0.96);
    z-index: 5;
  }
`;

const NavLink = styled.a`
  font-size: 14px;
  font-weight: 500;
  color: #b4b4b4;

  &:hover {
    color: ${color.text};
  }

  ${media.phone} {
    font-size: 16px;
    padding: 12px;
    border-radius: 6px;
  }
`;

const EmailButton = styled.a`
  font-size: 13px;
  font-weight: 600;
  color: ${color.text};
  border: 1px solid #3a3a3a;
  border-radius: 6px;
  padding: 9px 16px;

  &:hover {
    color: ${color.text};
    border-color: #6a6a6a;
  }

  ${media.phone} {
    text-align: center;
    padding: 13px 16px;
    margin-top: 6px;
  }
`;

const MenuButton = styled.button<{ $open: boolean }>`
  display: none;
  width: 44px;
  height: 44px;
  align-items: center;
  justify-content: center;
  border: 1px solid #3a3a3a;
  border-radius: 8px;
  background: ${({ $open }) => ($open ? "#1a1a1a" : "transparent")};
  color: ${color.text};
  cursor: pointer;
  padding: 0;

  ${media.phone} {
    display: flex;
  }
`;

const sections = [
  { href: "#gitwarren", label: "GitWarren" },
  { href: "#work", label: "Work" },
  { href: "#studio", label: "Studio" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <Bar as="nav" aria-label="Main">
      <Brand href="#top">
        <KMark size={26} />
        Klarluft
      </Brand>
      <Links $open={open} id="site-menu">
        {sections.map((section) => (
          <NavLink key={section.href} href={section.href} onClick={() => setOpen(false)}>
            {section.label}
          </NavLink>
        ))}
        <EmailButton href={`mailto:${company.email}`}>{company.email}</EmailButton>
      </Links>
      <MenuButton
        type="button"
        $open={open}
        aria-expanded={open}
        aria-controls="site-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((value) => !value)}
      >
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden="true">
          {open ? <path d="M5 5l10 10M15 5L5 15" /> : <path d="M3 6h14M3 10h14M3 14h14" />}
        </svg>
      </MenuButton>
    </Bar>
  );
}
