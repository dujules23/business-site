import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { MenuData } from "../../data/MenuData";
// import "../styles/_navbar.scss";
import {
  Nav,
  NavBarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "../Navbar/NavbarElements";

const title = `Q & Sons Cleaning Solutions`;
const buttonTitle = "Contact";

export default function Navbar({ toggle }) {
  console.log(toggle);

  return (
    <>
      <Nav>
        <NavBarContainer>
          <NavLogo to="/">{title}</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            {MenuData.map((item, index) => {
              return (
                <NavItem key={index}>
                  <NavLinks to={item.url}>{item.title}</NavLinks>
                </NavItem>
              );
            })}
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="contact">{buttonTitle}</NavBtnLink>
          </NavBtn>
        </NavBarContainer>
      </Nav>
    </>
  );
}
