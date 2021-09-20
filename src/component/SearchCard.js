import { getQueriesForElement } from '@testing-library/dom';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-flow: wrap;
  justify-content: space-around;
`;

const SearchCards = styled.div`
  width: 300px;
  height: 600px;

  display: flex;
  flex-flow: wrap;
  align-content: space-between;
  justify-content: center;

  margin-top: 2rem;
  margin-bottom: 2.5rem;
`;

const SearchCard = props => {
  return (
    <Container>
      {props.search.map((item, index) => (
        <SearchCards key={index}>
          <img src={item.attributes.posterImage.small} />
        </SearchCards>
      ))}
    </Container>
  );
};

export default SearchCard;
