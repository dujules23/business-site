import React, { useContext } from "react";
import NavContext from "../../context/NavContext";
import { animateScroll as scroll } from "react-scroll";
import { SocialMediaData } from "../../data/SocialMediaData";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";

const Footer = () => {
  // const { toggleHome } = useContext(NavContext);

  // const footerScroll = scroll.scrollToTop();

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About</FooterLinkTitle>
              <FooterLink to="about">About</FooterLink>
              <FooterLink to="services">Services</FooterLink>
              <FooterLink to="about">Terms of Service</FooterLink>
              <FooterLink to="faq">FAQ</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Contact Us</FooterLinkTitle>
              <FooterLink to="about">About</FooterLink>
              <FooterLink to="services">Services</FooterLink>
              <FooterLink to="about">Terms of Service</FooterLink>
              <FooterLink to="faq">FAQ</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Videos</FooterLinkTitle>
              <FooterLink to="about">About</FooterLink>
              <FooterLink to="services">Services</FooterLink>
              <FooterLink to="about">Terms of Service</FooterLink>
              <FooterLink to="faq">FAQ</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
              <FooterLink to="about">About</FooterLink>
              <FooterLink to="services">Services</FooterLink>
              <FooterLink to="about">Terms of Service</FooterLink>
              <FooterLink to="faq">FAQ</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo onClick={toggleHome}> {`Q & Sons`}</SocialLogo>
            <WebsiteRights>
              Durrell Jules © {new Date().getFullYear()} All rights reserved.
            </WebsiteRights>
            <SocialIcons>
              {SocialMediaData.map((item, index) => {
                return (
                  <div key={index}>
                    <SocialIconLink
                      href={item.href}
                      target={item.target}
                      aria-label={item.label}
                    >
                      {item.icon}
                    </SocialIconLink>
                  </div>
                );
              })}
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
