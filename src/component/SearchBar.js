import React from "react";
import styled from "styled-components";
import { ImSearch } from "react-icons/im";
import { useHistory } from "react-router";

const SearchContainer = styled.div`
  height: 45px;

  display: flex;
  align-items: center;
  align-content: center;
`;

const Button = styled.button`
  height: 40px;
  width: 40px;

  font-size: 20px;
  background-color: rgb(237, 246, 249, 0.9);
  color: rgb(29, 53, 87);

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  border-radius: 5px 0 0 5px;

  &:hover {
    cursor: pointer;
    color: rgb(230, 57, 70);
  }
  @media (max-width: 575px) {
    width: 30px;
    height: 30px;
    font-size:15px;
  }
`;

const Search = styled.input`
  height: 40px;
  width: 400px;

  border: none;
  border-radius: 0 5px 5px 0;
  outline: none;
  font-size: 20px;
  background-color: rgb(237, 246, 249, 0.9);

  @media (max-width: 575px) {
    width: 300px;
    height: 30px;
    font-size: 15px;
  }

  @media (max-width: 375px) {
    width: 250px;
    height: 30px;
    font-size: 13px;
  }
`;

const SearchBar = (props) => {
  const history = useHistory();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        props.onClick();
        history.push("/search");
      }}
    >
      <SearchContainer>
        <Button>
          <ImSearch />
        </Button>
        <Search
          onChange={props.onChange}
          placeholder="What are you searching for?"
        ></Search>
      </SearchContainer>
    </form>
  );
};

export default SearchBar;
