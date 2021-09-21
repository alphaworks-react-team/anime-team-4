import React, { useState, useEffect } from 'react';

import styled from 'styled-components';
import { AiFillHeart } from 'react-icons/ai';
import { AiFillStar } from 'react-icons/ai';

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
const AverageRating = styled.div`
  color: green;
`;

const Modal = styled.div`
  visibility: ${props => (props.shown === true ? 'visible' : 'hidden')};
`;

const CardWithModal = props => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    console.log('props ====>', props);
  }, [props]);
  return (
    <h1>hello</h1>
    // <>
    //   <TrendCard>
    //     <img
    //       onMouseEnter={() => setShow(true)}
    //       onMouseLeave={() => setShow(false)}
    //       src={props.item.attributes.posterImage.small}
    //       alt=''
    //     />
    //   </TrendCard>
    //   <Modal shown={show}>
    //     <InfoCard>
    //       <Title>
    //         {props.item.attributes.canonicalTitle} (
    //         {props.item.attributes.ageRating})
    //       </Title>
    //       <AverageRating>{props.item.attributes.averageRating}%</AverageRating>
    //       <div>
    //         <AiFillHeart style={{ color: 'red' }} />#
    //         {props.item.attributes.popularityRank} Most Popular
    //       </div>
    //       <div>
    //         <AiFillStar style={{ color: 'yellow' }} />#
    //         {props.item.attributes.ratingRank} Highest Rated
    //       </div>
    //     </InfoCard>
    //     Description
    //     <TrendDescripion>{props.item.attributes.description}</TrendDescripion>
    //   </Modal>
    // </>
  );
};

export default CardWithModal;
