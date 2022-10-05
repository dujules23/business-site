import React from "react";
// import Icon1 from "../../images/svg-2.svg";
// import Icon2 from "../../images/svg-3.svg";
// import Icon3 from "../../images/svg-4.svg";
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
