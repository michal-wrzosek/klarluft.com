"use client";

import styled from "styled-components";
import { color, font, media } from "@/styles/tokens";
import { company, links } from "@/content/company";
import { ArrowOut, Card, Container, Display, Section } from "./ui";

const Band = styled(Section)`
  border-top: 1px solid ${color.lineSoft};
  padding: 108px 0;

  ${media.phone} {
    padding: 68px 0;
  }
`;

const Grid = styled(Container)`
  display: grid;
  grid-template-columns: minmax(0, 640px) 464px;
  gap: 56px;
  align-items: start;

  ${media.tablet} {
    grid-template-columns: minmax(0, 1fr);
    gap: 36px;
  }
`;

const Title = styled(Display)`
  font-size: 53px;
  line-height: 1.03;
  letter-spacing: -0.03em;

  ${media.phone} {
    font-size: 37px;
    line-height: 1.04;
  }
`;

const Pitch = styled.p`
  margin: 22px 0 0;
  max-width: 520px;
  font-size: 17px;
  line-height: 1.6;
  color: #a8a8a8;
  text-wrap: pretty;

  ${media.phone} {
    margin-top: 18px;
    font-size: 16px;
  }
`;

const Email = styled.a`
  display: inline-block;
  margin-top: 34px;
  font-size: 32px;
  font-weight: 700;
  letter-spacing: -0.025em;
  border-bottom: 2px solid rgba(53, 211, 255, 0.34);
  padding-bottom: 5px;
  overflow-wrap: anywhere;

  &:hover {
    border-bottom-color: ${color.accentHover};
  }

  ${media.phone} {
    margin-top: 26px;
    font-size: 23px;
    letter-spacing: -0.02em;
  }
`;

const Elsewhere = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 26px;
  margin-top: 42px;

  ${media.phone} {
    flex-direction: column;
    gap: 14px;
    margin-top: 32px;
  }
`;

const Outbound = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 7px;
  font-size: 14.5px;
  font-weight: 600;
  color: #cfcfcf;

  svg {
    color: #6e6e6e;
  }

  &:hover {
    color: ${color.text};
  }

  ${media.phone} {
    font-size: 15px;
  }
`;

const Details = styled(Card)`
  padding: 32px;

  ${media.phone} {
    padding: 26px;
  }
`;

const DetailsLabel = styled.div`
  font-family: ${font.mono};
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.16em;
  color: ${color.dim};
  margin-bottom: 22px;

  ${media.phone} {
    font-size: 10px;
    margin-bottom: 18px;
  }
`;

const LegalName = styled.div`
  font-size: 17px;
  font-weight: 700;
  margin-bottom: 14px;

  ${media.phone} {
    font-size: 16px;
    margin-bottom: 12px;
  }
`;

const Address = styled.address`
  font-style: normal;
  font-size: 15.5px;
  line-height: 1.72;
  color: #a8a8a8;

  ${media.phone} {
    font-size: 15px;
  }
`;

const Rule = styled.div`
  height: 1px;
  background: ${color.line};
  margin: 22px 0;

  ${media.phone} {
    margin: 20px 0;
  }
`;

const Registry = styled.dl`
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 11px;
`;

const RegistryRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  font-size: 14.5px;

  dt {
    color: ${color.dim};
  }

  dd {
    margin: 0;
    font-family: ${font.mono};
    font-size: 13.5px;
    color: ${color.textSoft};
    overflow-wrap: anywhere;
  }

  dd a {
    font-family: ${font.body};
    font-size: 14.5px;
    color: ${color.textSoft};
  }

  dd a:hover {
    color: ${color.text};
  }

  ${media.phone} {
    font-size: 14px;

    dd {
      font-size: 13px;
    }

    dd a {
      font-size: 14px;
    }
  }
`;

export function Contact() {
  return (
    <Band id="contact" $deep>
      <Grid>
        <div>
          <Title>Start a conversation.</Title>
          <Pitch>
            Contract engineering, product work, or a second opinion on something that has to be
            right. Tell us what the system has to do and where it hurts.
          </Pitch>
          <Email href={`mailto:${company.email}`}>{company.email}</Email>
          <Elsewhere>
            <Outbound href={links.gitwarren}>
              gitwarren.com
              <ArrowOut size={13} />
            </Outbound>
            <Outbound href={links.personal}>
              michal.wrzosek.pl
              <ArrowOut size={13} />
            </Outbound>
            <Outbound href={links.github}>
              github.com/klarluft
              <ArrowOut size={13} />
            </Outbound>
          </Elsewhere>
        </div>

        <Details>
          <DetailsLabel>COMPANY DETAILS</DetailsLabel>
          <LegalName>{company.legalName}</LegalName>
          <Address>
            {company.street}
            <br />
            {company.postalCity}
            <br />
            {company.country}
          </Address>
          <Rule />
          <Registry>
            <RegistryRow>
              <dt>VAT</dt>
              <dd>{company.vat}</dd>
            </RegistryRow>
            <RegistryRow>
              <dt>KvK</dt>
              <dd>{company.kvk}</dd>
            </RegistryRow>
            <RegistryRow>
              <dt>Email</dt>
              <dd>
                <a href={`mailto:${company.email}`}>{company.email}</a>
              </dd>
            </RegistryRow>
          </Registry>
        </Details>
      </Grid>
    </Band>
  );
}
