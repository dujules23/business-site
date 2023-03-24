import React from "react";
import FaqAccordion from "../Faq";
import Contact from "../Contact";
// import Map from "../Map";
import ImageCarousel from "../ImageCarousel";

// import { MapContainer, TileLayer, Marker } from "react-leaflet";

import { Button } from "../ButtonElement";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
} from "./InfoElements";

const InfoSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headline,
  darkText,
  description,
  buttonLabel,
  img,
  alt,
  primary,
  dark,
  dark2,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                {id === "faq" ? (
                  <FaqAccordion />
                ) : (
                  <>
                    <Heading lightText={lightText}>{headline}</Heading>
                    <Subtitle darkText={darkText}>{description}</Subtitle>
                    {id === "contact" && <Contact />}
                  </>
                )}
              </TextWrapper>
            </Column1>
            <Column2>
              {/* {id === "contact" ? (
                <ImgWrap>
                  <Map />
                </ImgWrap>
              ) : ( */}
              {id === "ourwork" ? (
                <ImageCarousel />
              ) : (
                <ImgWrap>
                  <Img src={img} alt={alt} />
                </ImgWrap>
              )}
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
