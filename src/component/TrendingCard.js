import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { AiFillHeart } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";

const Container = styled.div`
  display: flex;
  flex-flow: row;
  width: 280px;
  border-radius: 5px;
  margin: 10px;
  align-items: center;

  // justify-content: space-around;
`;


const Div = styled.div`
  
`


const CardWrapper = styled.div`
  display: flex;
  width: 280px;
  flex-flow: wrap;

  justify-content: center;
  align-items: center;

  margin-top: 2rem;
  margin-bottom: 2.5rem;
`;
const Description = styled.div`
  width: 280px;
  height: 270px;
  padding: 10px;
  overflow: hidden;
`;

const Modal = styled.div`
  background-color: white;
  position: absolute;
  border-radius: 5px;
  transform: translate(310px)
`;

const Info = styled.div`
  
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  margin: 0.5rem;
`;

const Title = styled.div`
  font-weight: bold;
  font-size:20px
  width: 280px;
`;
const AvgRating = styled.div`
  color: green;
  font-size: 15px;
  padding-top: 10px;
  padding-bottom: 10px;
`;

const Img = styled.img`
  border-radius: 5px;
  width: 280px;
`;

const ImgHover = styled.div`
  :hover {
    color: rgba(10, 10, 10, 0.5);
  }
`;

const Popular = styled.div`

`


const Highest = styled.div``;





const TrendingCard = (props) => {
  const [show, setShow] = useState(false);



  const moustEnter = () => {
    setShow(true);
  };


  return (
    <Container>
      <Div>
        <CardWrapper>
          <ImgHover>
            <Img
              onMouseEnter={moustEnter}
              onMouseLeave={() => setShow(false)}
              src={props.src}
              alt=""
            />
          </ImgHover>
          {show && (
            <Modal>
              <Info>
                <Title>
                  {props.title} ({props.ageRating})
                </Title>
                <AvgRating>{props.avgRating}%</AvgRating>
                <Popular>
                  <AiFillHeart style={{ color: "red" }} />#{props.popularity}{" "}
                  Most Popular
                </Popular>
                <Highest>
                  <AiFillStar style={{ color: "yellow" }} />#{props.rating}{" "}
                  Highest Rated
                </Highest>
              </Info>

              <Description>{props.description}</Description>
            </Modal>
          )}
        </CardWrapper>
      </Div>
    </Container>
  );
};

export default TrendingCard;
