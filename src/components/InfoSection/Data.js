import React from "react";
import CleanUp from "../../assets/cleanUp";

export const homeObjOne = {
  id: "about",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "About",
  headline: "Team of Experts",
  description:
    "Excellence and professionalism are first when it comes to our Residential and Commercial Cleaning Service. We are constantly improving our services, staying up-to-date on all the lastest industry advancements and bringing our knowledge to your doorstep. Since 2021, our goal has remained the same -- to provide reliable services and make sure our clients know we are professionals they can trust.",
  buttonLabel: "Get Started",
  imgStart: false,
  img: <CleanUp />,
  alt: "clean-up",
  dark: false,
  primary: false,
  darkText: true,
};

export const homeObjTwo = {
  id: "faq",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Frequently Asked Questions",
  headline: "Team of Experts",
  description:
    "Excellence and professionalism are first when it comes to our Residential and Commercial Cleaning Service. We are constantly improving our services, staying up-to-date on all the lastest industry advancements and bringing our knowledge to your doorstep. Since 2021, our goal has remained the same -- to provide reliable services and make sure our clients know we are professionals they can trust.",
  buttonLabel: "Get Started",
  imgStart: true,
  img: require("../../images/svg-5.svg").default,
  alt: "questions",
  dark: false,
  primary: false,
  darkText: true,
};

export const homeObjThree = {
  id: "about",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "About",
  headline: "Team of Experts",
  description:
    "Excellence and professionalism are first when it comes to our Residential and Commercial Cleaning Service. We are constantly improving our services, staying up-to-date on all the lastest industry advancements and bringing our knowledge to your doorstep. Since 2021, our goal has remained the same -- to provide reliable services and make sure our clients know we are professionals they can trust.",
  buttonLabel: "Get Started",
  imgStart: false,
  // img: require(<Svg1 />).default,
  alt: "clean-up",
  dark: true,
  primary: true,
  darkText: false,
};
