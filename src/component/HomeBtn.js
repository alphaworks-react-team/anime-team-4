import React from 'react'
import styled from 'styled-components'
import {AiOutlineHome} from 'react-icons/ai'

const HomeButton = styled.button`
display: flex;
justify-content: center;
align-items: center;

font-size: 40px;
background: none;
border: none;
`

const HomeBtn = () => {
  return (
    <div>
      <HomeButton><AiOutlineHome/></HomeButton>
    </div>
  )
}

export default HomeBtn
