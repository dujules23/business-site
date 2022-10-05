import React, { useState } from "react";
import { FaqData } from "../../data/FaqData";
import { IconContext } from "react-icons/lib";
import { FiPlus, FiMinus } from "react-icons/fi";

import {
  AccordionSection,
  AccordionContainer,
  AccordionWrapper,
  AccordionDropdown,
} from "./FaqElements";

const FaqAccordion = () => {
  const [clicked, setClicked] = useState(false);

  const toggleFaq = (index) => {
    if (clicked === index) {
      // if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };
  return (
    <IconContext.Provider value={{ color: "#01bf71", size: "25px" }}>
      <AccordionSection>
        <AccordionContainer>
          {FaqData.map((item, index) => {
            return (
              <div key={index}>
                <AccordionWrapper onClick={() => toggleFaq(index)}>
                  <h1>{item.question}</h1>
                  <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                </AccordionWrapper>
                {clicked === index ? (
                  <AccordionDropdown>
                    <p>{item.answer}</p>
                  </AccordionDropdown>
                ) : null}
              </div>
            );
          })}
        </AccordionContainer>
      </AccordionSection>
    </IconContext.Provider>
  );
};

export default FaqAccordion;
