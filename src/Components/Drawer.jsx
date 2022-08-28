import React from "react";
import styled from "styled-components";

export const Drawer = ({ isDrawerOpen }) => {
  console.log(isDrawerOpen);
  return isDrawerOpen ? (
    <StyledDrawer>
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
    </StyledDrawer>
  ) : (
    <div></div>
  );
};
const StyledDrawer = styled.div`
  height: 90vh;
position: relative;
  li {
    /* border: 1px solid black; */
    height: 10%;
    list-style: none;
    display: flex;
    align-items: center;
    padding: 0 20px;
    /* border-bottom: 1px solid green; */

    a {
      text-decoration: none;
      color: #100a03;
    }
  }
`;
