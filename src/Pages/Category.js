import { useEffect, useState, useCallback, useRef } from "react";
import utils from "../utils/animeAPI.js";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { AiFillHeart } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import ReactLoading from "react-loading";

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
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const { id } = useParams();
  const loader = useRef(null);

  useEffect(() => {
    utils.ItemsInCategory(id, offset).then((res) => {
      setCategory(res);
    });
  }, []);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      utils.ItemsInCategory(id, offset).then((res) => {
        setCategory([...category, ...res]);
      });
    }, 1000);
  }, [offset]);

  const handleObserver = useCallback(async (entries) => {
    const target = await entries[0];
    if (target.isIntersecting) {
      setOffset((offset) => offset + 10);
    }
  }, []);

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "20px",
      threshold: 0,
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) observer.observe(loader.current);
  }, [handleObserver]);

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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {loading && (
          <ReactLoading
            type={"cylon"}
            color={"black"}
            height={"10%"}
            width={"20%"}
          />
        )}
      </div>
      <div ref={loader} />
    </Container>
  );
};

export default Category;
