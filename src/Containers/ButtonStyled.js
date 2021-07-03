import React from 'react';
import styled from 'styled-components';

const Container = styled.div`

  color: #fff;
  padding: 0.5rem;
  backdrop-filter: blur(5px);
  background-color: rgba(0, 0, 0, 0.4);
  margin: 1rem;
  border-radius: 10px;
  align:center;
  width:100%;

  button {
    font-size: clamp(0.5rem, 2vw, 0.9rem);
    padding: 0.2rem 1.0rem;
    color: #000;
    background: #ffb347;
    background: linear-gradient(to right, #ffcc33, #ffb347);
    border: none;
    border-radius: 4px;
    cursor: pointer;
    outline: none;
  }
`;


const ButtonStyled = ({ text }) => {
  return (
    <>
        <Container>
        <button style={{fontFamily: 'Special Elite', marginLeft:"0px", marginRight: "0px", width:"100%" }}>{text}</button>
        </Container>
    </>
  );
};

export default ButtonStyled;