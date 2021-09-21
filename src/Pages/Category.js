import { useEffect, useState } from "react";
import utils from "../utils/animeAPI.js";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { AiFillHeart } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";

const Container = styled.div`
  width: 90vw;
  display: flex;
  flex-flow: column wrap;
  margin-top: 1rem;
`;

const CategoryCards = styled.div`
  display: flex;
  flex-flow: row;
  margin-bottom: 1rem;
`;



const InfoCard = styled.div`
  padding: 1rem;

  display: flex;
  flex-flow: column;
  justify-content: space-around;
`;
const Title = styled.h1`
  font-weight: bold;
  font-size: 45px;
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
  font-size: 20px;
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
        <CategoryCards key={index}>
          <img src={item.attributes.posterImage.small} alt="" />
          <InfoCard>
            <Title>
              {item.attributes.canonicalTitle} ({item.attributes.ageRating})
            </Title>
            <AverageRating>{item.attributes.averageRating}%</AverageRating>
            <PopRank>
              <AiFillHeart style={{ color: "red" }} />#
              {item.attributes.popularityRank} Most Popular
            </PopRank>
            <OverallRank>
              <AiFillStar style={{ color: "yellow" }} />#
              {item.attributes.ratingRank} Highest Rated
            </OverallRank>
            <Description>{item.attributes.description}</Description>
          </InfoCard>
        </CategoryCards>
      ))}
    </Container>
  );
};

export default Category;
