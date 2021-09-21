import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { AiFillHeart } from 'react-icons/ai';
import { AiFillStar } from 'react-icons/ai';
import CardWithModal from './CardWithModal';

const Container = styled.div`
  display: flex;
  flex-flow: wrap;
  justify-content: space-around;
`;

const TrendingCard = props => {
  return (
    <Container>
      {props.trending.map((item, index) => {
        <h1>hello</h1>;
      })}
    </Container>
  );
};

export default TrendingCard;
