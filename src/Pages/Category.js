import { useEffect, useState } from "react";
import utils from "../utils/animeAPI.js";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { AiFillHeart } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";

const Container = styled.div`
  display:flex;
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

  background-color: rgb(237, 246, 249,0.9);
`;

const CategoryCards = styled.div`
  display: flex;
  flex-flow: row;
  border-radius: 5px;
`;

const InfoCard = styled.div`
  padding-left: 1rem;

  display: flex;
  flex-flow: column;
  justify-content: space-around;
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 40px;
`;

const AverageRating = styled.div`
  color: green;
  font-size: 25px;
`;

const PopRank = styled.div`
  font-size: 20px;

  display: flex;
  align-items: center;
`;

const OverallRank = styled.div`
  font-size: 20px;

  display: flex;
  align-items: center;
`;

const Description = styled.div`
  height: 150px;
  font-size: 20px;

  overflow: hidden;
`;


const Category = () => {
  const [category, setCategory] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    utils.ItemsInCategory(id).then((res) => {
      setCategory(res);
    });
  }, []);

  return (
    <Container>
      {category.map((item, index) => (
        <Wrapper>
          <CategoryCards key={index}>
            <img src={item.attributes.posterImage.small} alt='' />
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
          </CategoryCards>
        </Wrapper>
      ))}
    </Container>
  );
};

export default Category;
