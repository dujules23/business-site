import styled from "styled-components";
import { MdKeyboardArrowLeft, MdArrowBack } from "react-icons/md";

export const ServicesContainer = styled.div`
  height: 850px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;

  @media screen and (max-width: 768px) {
    height: 1900px;
  }
`;
export const ServicesWrapper = styled.div`
  max-width: 2000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const ServicesCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  height: 600px;
  padding: 25px;
  // margin-bottom: 25px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    // height: 600px;
    // width: 500px;
  }

  @media screen and (max-width: 480px) {
    height: 520px;
  }
`;

export const ServicesIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;
export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;
  margin-top: 32px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;
export const ServicesH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
  // color: #fff;
`;
export const ServicesP = styled.p`
  font-size: 0.8rem;
  text-align: left;
  padding: 2px;
  // opacity: 0;
  transition: all 0.3s ease-in-out;
  // color: #fff;

  // &:hover {
  //   opacity: 1;
  //   transition: all 0.2s ease-in-out;
  // }

  @media screen and (max-width: 480px) {
    font-size: 0.7rem;
  }
`;

export const ServiceItems = styled.ul`
  padding: 2px;
`;

export const ArrowBack = styled(MdArrowBack)`
  margin-right: 8px;
  font-size: 20px;
`;

export const ArrowLeft = styled(MdKeyboardArrowLeft)`
  margin-right: 8px;
  font-size: 20px;
`;
