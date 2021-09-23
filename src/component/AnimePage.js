import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import utils from '../utils/animeAPI.js';
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 75vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CoverImage = styled.img`
  max-width: 100%;
  height: auto;
  opacity: 0.7;
`;

const PosterImage=styled.img`

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
        <Container>
            <CoverImage src={anime.attributes.coverImage.large} />
          <Wrapper>
            <PosterImage src={anime.attributes.posterImage.small} />
            <div>
            <h1>
              {anime.attributes.titles.en
                ? anime.attributes.titles.en
                : anime.attributes.titles.en_jp}
              {anime.attributes.averageRating}
              {anime.attributes.popularityRank}
              {anime.attributes.ratingRank}
            </h1>
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
          </Wrapper>
        </Container>
      )}
    </div>
  );
};

export default AnimePage;
