"use client";

import styled from "styled-components";
import { color, media } from "@/styles/tokens";
import { company } from "@/content/company";
import { Container, KMark } from "./ui";

const Band = styled.footer`
  background: ${color.bgDeep};
  border-top: 1px solid ${color.lineSoft};
`;

const Row = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding-top: 34px;
  padding-bottom: 34px;
  font-size: 13.5px;
  color: #5e5e5e;

  ${media.phone} {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    padding-top: 26px;
    padding-bottom: 26px;
    font-size: 13px;
  }
`;

const Legal = styled.div`
  display: flex;
  align-items: center;
  gap: 11px;
`;

export function Footer() {
  return (
    <Band>
      <Row>
        <Legal>
          <KMark size={20} opacity={0.5} />
          <span>© {new Date().getFullYear()} {company.legalName}</span>
        </Legal>
        <span>Software engineering services</span>
      </Row>
    </Band>
  );
}
