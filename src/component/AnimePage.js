import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import utils from '../utils/animeAPI.js';
import styled from 'styled-components'

const CoverImage = styled.img`

`

const AnimePage = () => {
    const params = useParams();
    const [anime, setAnime] = useState([]);

    const getAnime = async () => {
      const fetchAnime = await utils.AnimeByID(params.id);
      setAnime(fetchAnime);
    };

    useEffect(() => {
      getAnime();
    });

  return (
    <div>
      {anime.attributes && (
        <div>
          <div>
            <CoverImage src={anime.attributes.coverImage.large} />
          </div>
          <h1>
            {anime.attributes.titles.en
              ? anime.attributes.titles.en
              : anime.attributes.titles.en_jp}
          </h1>
          <div>
            {anime.attributes.averageRating}
            {anime.attributes.popularityRank}
            {anime.attributes.ratingRank}
            {anime.attributes.description}
          </div>
          <div>
            Anime Details
            {anime.attributes.subtype}
            {anime.attributes.startDate}
            {anime.attributes.ageRating}
            {anime.attributes.status}
            {anime.attributes.episodeLength} min
            {anime.attributes.showType}
          </div>
        </div>
      )}
    </div>
  );
};

export default AnimePage;
