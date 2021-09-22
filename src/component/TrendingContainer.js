import React from 'react'

import TrendingCard from './TrendingCard.js'

const TrendingContainer = (props) => {
  return (
    <div>
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
    </div>
  );
}

export default TrendingContainer
