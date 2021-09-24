import React from "react";
import styled from "styled-components";
import { AiFillHeart } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";

const Container = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 60vw;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  background-color: rgb(237, 246, 249, 0.9);
`;

const SearchCards = styled.div`
  display: flex;
  flex-flow: row;
  border-radius: 5px;
  @media (max-width: 890px) {
    flex-flow: column;
  }
`;

const InfoCard = styled.div`
  padding: 1rem;

  display: flex;
  flex-flow: column;
  justify-content: space-around;
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 40px;
  @media (max-width: 890px) {
    font-size: 20px;
  }
`;

const AverageRating = styled.div`
  color: green;
  font-size: 25px;
  font-weight: bold;
  @media (max-width: 890px) {
    font-size: 15px;
  }
`;

const PopRank = styled.div`
  font-size: 20px;

  display: flex;
  align-items: center;
  font-weight: bold;
  @media (max-width: 890px) {
    font-size: 15px;
  }
`;

const OverallRank = styled.div`
  font-size: 20px;

  display: flex;
  align-items: center;
  font-weight: bold;
  @media (max-width: 890px) {
    font-size: 15px;
  }
`;

const Description = styled.div`
  height: 150px;
  font-size: 20px;
  overflow: hidden;
  @media (max-width: 890px) {
    font-size: 15px;
  }
`;

const A = styled.a`
  @media (max-width: 890px) {
    display: flex;
    justify-content: center;
  }
`;

const SearchCard = (props) => {
  return (
    <Container>
      {props.search.map((item, index) => (
        <Wrapper>
          <SearchCards key={index}>
            <A>
              <img src={item.attributes.posterImage.small} />
            </A>
            <InfoCard>
              <Title>
                {item.attributes.canonicalTitle} ({item.attributes.ageRating})
              </Title>
              <AverageRating>{item.attributes.averageRating}%</AverageRating>
              <PopRank>
                <AiFillHeart style={{ color: 'red' }} />#
                {item.attributes.popularityRank} Most Popular
              </PopRank>
              <OverallRank>
                <AiFillStar style={{ color: 'yellow' }} />#
                {item.attributes.ratingRank} Highest Rated
              </OverallRank>
              <Description>{item.attributes.description}</Description>
            </InfoCard>
          </SearchCards>
        </Wrapper>
      ))}
    </Container>
  );
};

export default SearchCard;
