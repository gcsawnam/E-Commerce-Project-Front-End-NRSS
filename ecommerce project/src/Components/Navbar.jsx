import React from "react";
// importurl('https://fonts.googleapis.com/css2?family=Bree+Serif&display=swap');
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "../Components/Navbar.css";
import { Drawer } from "./Drawer";
const Navbar = ({SetIsDrawerOpen, isDrawerOpen}) => {

  const drawerHandler = () => {
    {
      SetIsDrawerOpen(!isDrawerOpen);
    }
  };

  return (
    <div>
      <nav className="navbar">
        <div className="logo">logo</div>
        <div className="ul1">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Shop</a>
          </li>
          <li>
            <a href="#">News</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </div>
        <div className="quote1">
          <button id="quote">GET A QUOTE</button>
          <div className="quote">
            <input type="text" placeholder="Search.." name="search" />
          </div>
          <div className="quote">Login/Sign</div>
        </div>
        <div className="icon">
          <FontAwesomeIcon icon={faBars} onClick={drawerHandler} />
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
