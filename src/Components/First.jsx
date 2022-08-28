import React from "react";
import image from "../image/21.png";
import styled from "styled-components";

const First = () => {
  return (
    <StyledFirst background={image}>
      
        <div className="left">
        <h1> Our Garden's Most
          <br />
          Favorite Food
          </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing  <br />
          Dicta itaque, hic nobis ipsum modi ab iusto saepe dolorem maxime eaque
          architecto.
          </p>
       <span> <button className="button">EXPLORE PRODUCT</button> </span>
      </div>
      <div className="right"></div>
      
    </StyledFirst>
  );
};
export default First;
{
  
}
const StyledFirst = styled.div`
  display: flex;
  height: 90vh;
  flex-wrap: wrap;
  position: static;
  background-color: #52c49a;

  .left,
  .right {
    flex: 1;
    min-width: 300px;
  }
  .left {
    /* border: 1px solid red; */
    display: flex;
    text-align: center;
    justify-content: center;
  align-items: center;
    flex-direction: column;
  }

  
  p{
    font-size: 20px;
  }
  .right {
    background: url(${(props) => props.background}) no-repeat top center;
    background-size: cover;
  }

  @media only screen and (max-width: 360px) {
    h1{
  font-size:25px;
  }
  p{
    font-size: 15px;
  }
}
 
`;
