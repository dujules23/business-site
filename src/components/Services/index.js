import React from "react";
import { ServicesData } from "../../data/ServicesData";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServicesElements";

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        {ServicesData.map((item, index) => {
          return (
            <ServicesCard key={index}>
              <ServicesIcon src={item.picture} />
              <ServicesH2>{item.title}</ServicesH2>
              <ServicesP>{item.description}</ServicesP>
            </ServicesCard>
          );
        })}
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
