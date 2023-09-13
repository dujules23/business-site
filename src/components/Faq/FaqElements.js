import styled from "styled-components";

export const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-item: center;
  justify-content: center;
  position: relative;
  // height: 100vh;
  background: #fff;
  color: #000;
`;

export const AccordionContainer = styled.div`
  box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
  border-radius: 30px;
  // max-height: 50px;
`;

export const AccordionWrapper = styled.div`
  background: #010606;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  // width: 100%;
  cursor: pointer;
  overflowy: scroll;
  max-height: 60px;

  h1 {
    padding: 2 rem;
    font-size: 0.5 rem;
    margin: 12px;
  }
`;

export const AccordionDropdown = styled.div`
  background: #010606;
  color: #ffffff;
  width: 100%;
  height: 155px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #01bf71;
  border-top: 1px solid #01bf71;

  p {
    font-size: 1 rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 0.75rem;
  }
`;

export const AccordionText = styled.h1`
  font-size: 0.9375rem;

  @media screen and (max-width: 480px) {
    font-size: 0.75rem;
  }
`;
