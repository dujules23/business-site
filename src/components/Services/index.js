import React from "react";
import { ServicesData } from "../../data/ServicesData";
import { TbCheck } from "react-icons/tb";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServicesElements";

const style = { color: "#01BF71" };

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
              <ServicesP>
                {item.description.map((item, index) => {
                  return (
                    <ul>
                      <TbCheck style={style} />
                      {item}
                    </ul>
                  );
                })}
              </ServicesP>
            </ServicesCard>
          );
        })}
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
