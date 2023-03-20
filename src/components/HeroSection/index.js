import React, { useState } from "react";
import Video from "../../videos/video.mp4";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";
import { Button } from "../ButtonElement";

const title = `Welcome to Q & Sons Cleaning Solutions`;
const welcomeMessage = `You deserve nothing but the best. This is why we started Q & Son’s Cleaning Solutions, to make sure you'll get the most reliable service from one of our dedicated experts. Learn more about what we offer below.`;

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="/">
      <HeroBg>
        <div>
          dangerouslySetInnerHTML=
          {{
            __html: (
              <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
            ),
          }}
        </div>
      </HeroBg>
      <HeroContent>
        <HeroH1>{title}</HeroH1>
        <HeroP>{welcomeMessage}</HeroP>
        <HeroBtnWrapper>
          <Button
            to="contact"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="false"
            big="true"
            fontBig="false"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Contact Now {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
