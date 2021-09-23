import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import utils from '../utils/animeAPI.js';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;


const CoverImage = styled.img`
  max-width: 100%;
  height: auto;
  opacity: 0.7;
  `;

  const Wrapper = styled.div`
    width: 80vw;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  `;

const PosterCard = styled.div``;

const PosterImage = styled.img`
  width: 20vw;
  /* top:10;
position: fixed;
z-index: 10; */
  border: solid black;
`;

const TitleSection = styled.div`
  width: 35vw;
  border: solid black;
`;

const TitleCard = styled.div``;

const InfoSection = styled.div`
  width: 20vw;
  border: solid black;
`;

const InfoCard = styled.div``;

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
            <PosterCard>
              <PosterImage src={anime.attributes.posterImage.small} />
            </PosterCard>
            <TitleSection>
              <TitleCard>
                {anime.attributes.titles.en
                  ? anime.attributes.titles.en
                  : anime.attributes.titles.en_jp}
                {anime.attributes.averageRating}
                {anime.attributes.popularityRank}
                {anime.attributes.ratingRank}
              </TitleCard>
              {anime.attributes.description}
            </TitleSection>
            <InfoSection>
              <InfoCard>
                Anime Details
                {anime.attributes.subtype}
                {anime.attributes.startDate}
                {anime.attributes.ageRating}
                {anime.attributes.status}
                {anime.attributes.episodeLength} min
                {anime.attributes.showType}
              </InfoCard>
            </InfoSection>
          </Wrapper>
        </Container>
      )}
    </div>
  );
};

export default AnimePage;
