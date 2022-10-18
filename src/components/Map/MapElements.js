import styled from "styled-components";

export const MapInfo = styled.div`
  // position: absolute;
  background-color: #000;
  top: 50px;
  right: 30%;
  z-index: 999999;
  width: 267px;
  padding: 20px;
  color; #fff;
  font-family: 'Helvetica';
  font-size: 17px;
  font-weight: 300;
  // opacity: 0;
  animation: fadeIn 1s 1.5s;
  animation-fill-mode: forwards;

  span {
    font-size: 16px;
    display: block;
    padding-top: 200px;
    color: #ffd700;
  }

`;

export const MapWrapper = styled.div`
  background: rgba(8, 253, 216, 0.1);
  float: right;
  width: 53%;
  height: 100%;
`;
