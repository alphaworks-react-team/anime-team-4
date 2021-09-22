import React from 'react'
import styled from 'styled-components';
import TrendingCard from './TrendingCard.js'

const Div = styled.div`
  width: 60vw;
  display: flex;

  flex-flow: row wrap;
  justify-content: center;
`;

const TrendingContainer = (props) => {
  return (
    <Div>
      {props.trending.map((item, index) => (
        <TrendingCard
          key={index}
          src={item.attributes.posterImage.small}
          title={item.attributes.canonicalTitle}
          ageRating={item.attributes.ageRating}
          avgRating={item.attributes.averageRating}
          popularity={item.attributes.popularityRank}
          rating={item.attributes.ratingRank}
          description={item.attributes.description}
        />
      ))}
    </Div>
  );
}

export default TrendingContainer
