import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import utils from '../utils/animeAPI.js';
import styled from 'styled-components';
import { AiFillHeart } from 'react-icons/ai';
import { AiFillStar } from 'react-icons/ai';

const Container = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;

const AnimeImage = styled.img`
  max-width: 100%;
  height: auto;
  opacity: 0.7;
`;

const Wrapper = styled.div`
  width: 60vw;
  display: flex;
  padding: 1rem;

  background-color: rgb(237, 246, 249, 0.9);
`;

const PosterCard = styled.div``;

const PosterImage = styled.img`
  top: 30vh;
  position: sticky;
  z-index: 10;
  transform: translate(0px, -100px);
`;

const TitleSection = styled.div`
  display: flex;
  flex-flow: column wrap;
  padding: 1rem;
`;

const TitleCard = styled.div`
  display: flex;
  margin-bottom: 1rem;
  font-weight: bold;
`;

const Title = styled.div`
  display: flex;
  align-items: center;


  font-size: 40px;
`;

const AgeRating = styled.div`
  display: flex;
  align-items: center;

  color: rgb(153, 153, 153);
  font-size: 20px;
`;


const AverageRating = styled.div`
  color: green;
  font-size: 25px;

  font-weight: bold;
  margin-bottom: 1rem;
`;

const Rank = styled.div`
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const PopularityRank = styled.div``;

const OverallRating = styled.div``;

const InfoSection = styled.div`
display: flex;
flex-flow: column;

border: solid black;
`;

const InfoCard = styled.div`
  display: flex;
  flex-flow: column;
`;

const AnimePage = () => {
  const params = useParams();
  const [anime, setAnime] = useState([]);
  const [category, setCategory] = useState([]);
  const [genres, setGenres] = useState([]);

  const getAnime = async () => {
    const fetchAnime = await utils.AnimeByID(params.id);
    setAnime(fetchAnime);
    const fetchCategory = await utils.getAnimeCategoriesById(params.id);
    setCategory(fetchCategory);
    const fetchGenres = await utils.getAnimeGenresById(params.id);
    setGenres(fetchGenres);
  };


  useEffect(() => {
    getAnime();
  });

  return (
    <div>
      {anime.attributes && (
        <Container>
          <AnimeImage src={anime.attributes.coverImage.large} />
          <Wrapper>
            <PosterCard>
              <PosterImage src={anime.attributes.posterImage.small} />
            </PosterCard>
            <TitleSection>
              <InfoCard>
                <TitleCard>
                  <Title>
                    {anime.attributes.titles.en
                      ? anime.attributes.titles.en
                      : anime.attributes.titles.en_jp}
                  </Title>
                  <AgeRating>({anime.attributes.ageRating})</AgeRating>
                </TitleCard>
                <AverageRating>{anime.attributes.averageRating}%</AverageRating>

                <Rank>
                  <PopularityRank>
                    <AiFillHeart style={{ color: 'red' }} />#
                    {anime.attributes.popularityRank} Most Popular
                  </PopularityRank>
                  <OverallRating>
                    <AiFillStar style={{ color: 'yellow' }} />#
                    {anime.attributes.ratingRank} Highest Rated
                  </OverallRating>
                </Rank>
              </InfoCard>
              {anime.attributes.description}
            </TitleSection>
            <InfoSection>
              <InfoCard>
                Anime Details
                <div>{anime.attributes.subtype}</div>
                <div>{anime.attributes.startDate}</div>
                <div>{anime.attributes.ageRating}</div>
                <div>{anime.attributes.status}</div>
                <div>{anime.attributes.episodeLength} min</div>
                <div>{anime.attributes.showType}</div>
              </InfoCard>
            </InfoSection>
          </Wrapper>
        </Container>
      )}
    </div>
  );
};

export default AnimePage;
