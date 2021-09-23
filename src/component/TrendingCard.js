import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { AiFillHeart } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";

const Container = styled.div`
  display: flex;
  flex-flow: row;
  width: 280px;
  border-radius: 5px;
  // margin: 10px;
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

 
`;

const Description = styled.div`
  
  padding: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  

  
`;

const Modal = styled.div`
  background-color: white;
  position: absolute;
  border-radius: 5px;
  transform: translate(280px);
  background: rgb(29, 53, 87);
  color: rgb(237, 246, 249, 0.9);
  max-width: 260px;
  
`;

const Info = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  margin: 0.5rem;
`;

const Title = styled.div`
  font-weight: bold;
  font-size:20px;
  
`;
const AvgRating = styled.div`
  color: green;
  font-weight: bold;
  font-size: 15px;
  padding-top: 10px;
  padding-bottom: 10px;
`;

const Img = styled.img`
  border-radius: 5px;
  width: 240px;
  margin-top:15px;
  object-fit:contain;
`;

const A = styled.a`

`;

const Popular = styled.div`
font-weight: bold;
`


const Highest = styled.div`
font-weight: bold;
`;





const TrendingCard = (props) => {
  const [show, setShow] = useState(false);



  const mouseEnter = () => {
    setShow(true);
  };


  return (
    <Container>
      <Div>
        <CardWrapper>
          <A href={`/anime/${props.id}`}>
            <Img
              onMouseEnter={mouseEnter}
              onMouseLeave={() => setShow(false)}
              src={props.src}
              alt=""
            />
          </A>
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
                  <AiFillStar style={{ color: "yellow"}} />#{props.rating}{" "}
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
