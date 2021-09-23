import React from 'react'
import styled from 'styled-components';
import TrendingCard from './TrendingCard.js'

const Div = styled.div`
  width: 60vw;
  display: flex;
  background-color: rgb(237, 246, 249, 0.9);
  flex-flow: row wrap;
  justify-content: center;
`;


const TrendingContainer = (props) => {
  return (
    <Div>
      {props.trending.map((item, index) => (
        <TrendingCard
          key={index}
          id={item.id}
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
