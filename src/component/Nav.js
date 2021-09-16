import React from 'react';
import styled from 'styled-components';

const Body = styled.div`
  height: 7rem;
  background-color: black;
  display:flex;
  justify-content:space-around;
  align-items:center;
`;

const Nav = (props) => {
  return (
  <Body>
    {props.children}
  </Body>
  );
};

export default Nav;
