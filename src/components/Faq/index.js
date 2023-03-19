import React, { useState } from "react";
import { FaqData } from "../../data/FaqData";
import { IconContext } from "react-icons/lib";
import { FiPlus, FiMinus } from "react-icons/fi";

import _utils from "../../styles/_utils.scss";

import {
  AccordionSection,
  AccordionContainer,
  AccordionWrapper,
  AccordionDropdown,
  AccordionText,
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
                  <AccordionText className="flex flex-col ai-center">
                    {item.question}
                  </AccordionText>
                  <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                </AccordionWrapper>
                {clicked === index ? (
                  <AccordionDropdown className="flex flex-wrap ai-center">
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
