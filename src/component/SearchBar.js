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
  background-color: white;
  color: gray;

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  border-radius: 5px 0 0 5px;

  &:hover {
    cursor: pointer;
    color: black;
  }
`;

const Search = styled.input`
  height: 40px;
  width: 400px;

  border: none;
  border-radius: 0 5px 5px 0;
  outline: none;
  font-size: 20px;
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
