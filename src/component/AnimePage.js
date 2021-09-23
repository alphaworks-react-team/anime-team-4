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

const CategoryCard = styled.div``;

const TitleSection = styled.div`
  width: 30vw;
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
  justify-content: center;

  border: solid black;
`;

const InfoCard = styled.div``;

const GenreCard = styled.div`

`

const AnimePage = () => {
  const params = useParams();
  const [anime, setAnime] = useState([]);
  const [category, setCategory] = useState([]);
  const [genres, setGenres] = useState([]);

  const getAnime = async () => {
    const fetchAnime = await utils.AnimeByID(params.id);
    setAnime(fetchAnime);
  };

  const getCategory = async () => {
    const fetchCategory = await utils.getAnimeCategoriesById(params.id);
    setCategory(fetchCategory);
  };

  const getGenre = async () => {
    const fetchGenres = await utils.getAnimeGenresById(params.id);
    setGenres(fetchGenres);
  };

  useEffect(() => {
    getAnime();
    getCategory();
    getGenre();
  }, []);

  return (
    <div>
      {anime.attributes && (
        <Container>
          <AnimeImage src={anime.attributes.coverImage.large} />
          <Wrapper>
            <PosterCard>
              <PosterImage src={anime.attributes.posterImage.small} />
              <CategoryCard>
                {category[0]?.attributes.title}
                {category[1]?.attributes.title}
                {category[2]?.attributes.title}
                {category[3]?.attributes.title}
                {category[4]?.attributes.title}
                {category[5]?.attributes.title}
                {category[6]?.attributes.title}
                {category[7]?.attributes.title}
                {category[8]?.attributes.title}
                {category[9]?.attributes.title}
                {category[10]?.attributes.title}
                {category[11]?.attributes.title}
                {category[12]?.attributes.title}
                {category[13]?.attributes.title}
                {category[14]?.attributes.title}
                {category[15]?.attributes.title}
                {category[16]?.attributes.title}
                {category[17]?.attributes.title}
                {category[18]?.attributes.title}
                {category[19]?.attributes.title}
              </CategoryCard>
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
                <div>Type {anime.attributes.subtype}</div>
                <div>Aired {anime.attributes.startDate}</div>
                <div>Age Rating {anime.attributes.ageRating}</div>
                <div>Status {anime.attributes.status}</div>
                <div>Episode Length {anime.attributes.episodeLength} min</div>
                <GenreCard>
                  {genres[0]?.attributes.name}
                  {genres[1]?.attributes.name}
                  {genres[2]?.attributes.name}
                  {genres[3]?.attributes.name}
                  {genres[4]?.attributes.name}
                  {genres[5]?.attributes.name}
                  {genres[6]?.attributes.name}
                </GenreCard>
              </InfoCard>
            </InfoSection>
          </Wrapper>
        </Container>
      )}
    </div>
  );
};

export default AnimePage;
