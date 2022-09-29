import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { MenuData } from "../../data/MenuData";
import { animateScroll as scroll } from "react-scroll";
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
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavBarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            {title}
          </NavLogo>
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
