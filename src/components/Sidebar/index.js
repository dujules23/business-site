import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./SidebarElements";

import { MenuData } from "../../data/MenuData";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          {MenuData.map((item, index) => {
            return (
              <div key={index}>
                <SidebarLink to={item.url} onClick={toggle}>
                  {item.title}
                </SidebarLink>
              </div>
            );
          })}
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute
            onClick={toggle}
            to="contact"
            // smooth={true}
            // duration={500}
            // spy={true}
            // exact="true"
            // offset={-80}
          >
            Contact
          </SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
