import React from 'react';
import styled from 'styled-components';


const Body = styled.div`
  height: 7rem;
  background-color: rgb(69, 123, 157);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Nav = (props) => {
  return (
  <Body>
    {props.children}
  </Body>
  );
};

export default Nav;
