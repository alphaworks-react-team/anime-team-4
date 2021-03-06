import React from 'react'
import styled from 'styled-components'
import {AiOutlineHome} from 'react-icons/ai'
import { BrowserRouter as Link } from "react-router-dom";
import { useHistory } from "react-router";

const HomeButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(237, 246, 249, 0.9);

  font-size: 40px;
  background: none;
  border: none;

  :hover {
    color: rgb(230, 57, 70);
  }
  @media (max-width: 575px) {
    font-size: 30px;
  }
`;

const HomeBtn = () => {

  const history = useHistory();
  return (
    <div>
      <HomeButton onClick={()=> history.push('/')}><AiOutlineHome/></HomeButton>
    </div>
  )
}

export default HomeBtn
