import React, { useState } from "react";
import { MenuData } from "../data/MenuData";
import "../styles/_navbar.scss";

export default function NavBar() {
  const [clicked, setClicked] = useState(false);

  // handle click function
  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <nav className="nav-bar-items">
      <h1 className="logo">Q and Sons</h1>
      <div className="menu-icons" onClick={handleClick}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className="nav-menu">
        {MenuData.map((item, index) => {
          return (
            <li key={index} className={item.cName}>
              <a href={item.url}>
                <i className={item.icon}></i>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
