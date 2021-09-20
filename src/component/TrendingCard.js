import { getQueriesForElement } from '@testing-library/dom';
import React from 'react';
import styled from 'styled-components';
import { AiFillHeart } from 'react-icons/ai';
import { AiFillStar } from 'react-icons/ai';

const Container = styled.div`
  display: flex;
  flex-flow: wrap;
  justify-content: space-around;
`;

const TrendCard = styled.div`
  width: 300px;
  height: 600px;

  display: flex;
  flex-flow: wrap;
  align-content: space-between;
  justify-content: center;

  margin-top: 2rem;
  margin-bottom: 2.5rem;
`;

const TrendDescripion = styled.div`
  width: 300px;
  height: 150px;

  overflow: scroll;
`;

const InfoCard = styled.div`
  width: 285px;

  display: flex;
  flex-flow: column;
  justify-content: space-between;
  margin: 0.5rem;
`;

const Title=styled.div`
font-weight: bold;
`
const AgeRating = styled.div`
color: green;
`;

const TrendingCard = props => {
  return (
    <Container>
      {props.trending.map((item, index) => (
        <TrendCard key={index}>
          <img src={item.attributes.posterImage.small} alt='' />
          <InfoCard>
            <Title>
              {item.attributes.canonicalTitle} ({item.attributes.ageRating})
            </Title>
            <AgeRating>{item.attributes.averageRating}%</AgeRating>
            <div>
              <AiFillHeart style={{ color: 'red' }} />#
              {item.attributes.popularityRank} Most Popular
            </div>
            <div>
              <AiFillStar style={{ color: 'yellow' }} />#
              {item.attributes.ratingRank} Highest Rated
            </div>
          </InfoCard>
          Description
          <TrendDescripion>{item.attributes.description}</TrendDescripion>
        </TrendCard>
      ))}
    </Container>
  );
};

export default TrendingCard;
