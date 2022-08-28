import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { data } from "../data/data";
import styled from "styled-components";
// import '../Components/Infocard.css';
export const Infocard = () => {
  return (
    <StyledInfo>
      {data.map((user) => (
        <div className="Container">
          <FontAwesomeIcon className="icons" icon={user.icons} size="3x" />
          <div className="heading">
            <div>
              <h1>{user.heading} </h1>
            </div>
            <div>{user.paragraph}</div>
          </div>
        </div>
      ))}
    </StyledInfo>
  );
};

const StyledInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* border: 1px solid black; */
  /* width: 1000px; */
  justify-content: center;

  /* align-items: center; */
  position: relative;
  top: -40px;

  .Container {
    /* border: 1px solid red; */
    display: flex;
  background-color: #9c9898;
  padding: 0 10px;


    .icons{
      margin:0 10px;
      position:relative;
      top: 20px;
      
    }
    .heading {
      /* background-color: red; */
    }
  }
`;
