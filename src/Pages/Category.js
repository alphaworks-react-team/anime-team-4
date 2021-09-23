import { useEffect, useState, useCallback, useRef } from "react";
import utils from "../utils/animeAPI.js";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { AiFillHeart } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import ReactLoading from "react-loading";

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
  font-weight: bold;
`;

const PopRank = styled.div`
  font-size: 20px;

  display: flex;
  align-items: center;
  font-weight: bold;
`;

const OverallRank = styled.div`
  font-size: 20px;

  display: flex;
  align-items: center;
  font-weight: bold;
`;

const Description = styled.div`
  height: 150px;
  font-size: 20px;

  overflow: hidden;
`;

const A = styled.a``;

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
        <Wrapper>
          <CategoryCards key={index}>
            <A href={`/anime/${id}`}>
            <img src={item.attributes.posterImage.small} alt='' />
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
          </CategoryCards>
        </Wrapper>
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
