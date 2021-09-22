import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { AiFillHeart } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";

const Container = styled.div`
  display: flex;
  flex-flow: wrap;
  justify-content: space-around;
`;

const TrendCard = styled.div`
  width: 300px;
  height: 600px;

  display: flex;
  flex-flow: wrap;
  align-content: space-between;
  justify-content: center;

  margin-top: 2rem;
  margin-bottom: 2.5rem;
`;
const TrendDescripion = styled.div`
  width: 300px;
  height: 150px;

  overflow: scroll;
`;

const Modal = styled.div``;

const InfoCard = styled.div`
  width: 285px;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  margin: 0.5rem;
`;

const Title = styled.div`
  font-weight: bold;
`;
const AgeRating = styled.div`
  color: green;
`;

const TrendingCard = (props) => {
  const [show, setShow] = useState(false);

  return (
    <Container>
      <div>
        <TrendCard>
          <img
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
            src={props.src}
            alt=""
          />
          {show && (
            <Modal>
              <InfoCard>
                <Title>
                  {props.title} ({props.ageRating})
                </Title>
                <AgeRating>{props.avgRating}%</AgeRating>
                <div>
                  <AiFillHeart style={{ color: "red" }} />#{props.popularity}{" "}
                  Most Popular
                </div>
                <div>
                  <AiFillStar style={{ color: "yellow" }} />#{props.rating}{" "}
                  Highest Rated
                </div>
              </InfoCard>
              Description
              <TrendDescripion>{props.description}</TrendDescripion>
            </Modal>
          )}
        </TrendCard>
      </div>
    </Container>
  );
};

export default TrendingCard;
