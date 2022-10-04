import React from "react";
import Container from "../../constant/Container";
import Title from "../../constant/Title";
import IconBlock from "../../constant/IconBlock";
import TextLink from "../../constant/TextLink";
import Link from "../../constant/Link";
import { connect, styled } from "frontity";
import { flex, font } from "../../base/functions";

import headOffice from "../../../assets/images/head-office-map.png";
import headOffice2x from "../../../assets/images/head-office-map@2x.png";
import laemOffice from "../../../assets/images/laem-chabang-office-map.png";
import laemOffice2x from "../../../assets/images/laem-chabang-office-map@2x.png";

import mark from "../../../assets/images/svg/Map-marker.svg";
import message from "../../../assets/images/svg/Message.svg";
import phone from "../../../assets/images/svg/Phone.svg";
import parse from "html-react-parser";

const Location = ({ post }) => {
  return (
    <Section>
      <Container>
        <Title size="xs" color="blue" marginBottom={32}>
          {post.acf.contact_location_title ? parse(post.acf.contact_location_title) : ''}
        </Title>
        {post.acf.contact_locations.map((item) => (
          <LocationBlock>
            <LocationContent>
              <Office>{item.contact_location_name ? parse(item.contact_location_name) : ''}</Office>
              <Corporation>
                <p>{item.contact_location_text ? parse(item.contact_location_text) : ''}</p>
              </Corporation>
              <IconBlock icon={mark} marginBottom={16}>
                {item.contact_location_address ? parse(item.contact_location_address) : ''}
              </IconBlock>
              <IconBlock icon={message} marginBottom={16}>
                <TextLink
                  target="_blank"
                  rel="noopener noreferrer"
                  link={`mailto:${item.contact_location_mail}`}
                >
                  {item.contact_location_mail}
                </TextLink>
              </IconBlock>
              <IconBlock icon={phone} marginBottom={16}>
                <TextLink
                  target="_blank"
                  rel="noopener noreferrer"
                  link={`tel:${item.contact_location_phone}`}
                >
                  {item.contact_location_phone}
                </TextLink>
              </IconBlock>
            </LocationContent>
            <MapWrapper>
              <Map
                target="_blank"
                rel="noopener noreferrer"
                link={item.contact_location_map_link}
              >
                <img
                  width="558"
                  height="340"
                  src={item.contact_location_map_1x.url}
                  srcSet={`${item.contact_location_map_1x.url} 1x, ${item.contact_location_map_2x.url} 2x`}
                  alt=""
                />
              </Map>
            </MapWrapper>
          </LocationBlock>
        ))}
      </Container>
    </Section>
  );
};

const Corporation = styled.div`
  margin-bottom: 16px;
  & p {
    ${font(18, 30)};
    margin: 0;
  }
`;

const Office = styled.h5`
  ${font(24, 32)};
  letter-spacing: -0.02em;
  margin: 0;
  margin-bottom: 12px;
  color: var(--gray-900);
  font-weight: 500;
`;

const LocationContent = styled.div`
  ${flex("column")};
`;

const MapWrapper = styled.div``;

const Map = styled(Link)`
  display: inline-block;
  & img {
    max-width: 100%;
    height: auto;
  }
`;

const LocationBlock = styled.div`
  display: grid;
  grid-template-columns: 432px 1fr;
  grid-gap: 24px;
  margin-bottom: 96px;
  &:last-of-type {
    margin-bottom: 0;
  }
  @media screen and (max-width: 991px) {
    grid-template-columns: 100%;
    margin-bottom: 56px;
    &:last-of-type {
      margin-bottom: 0;
    }
  }
`;

const Section = styled.section`
  padding-top: 144px;
  padding-bottom: 192px;
  @media screen and (max-width: 991px) {
    padding-top: 128px;
    padding-bottom: 144px;
  }
`;

export default connect(Location);
