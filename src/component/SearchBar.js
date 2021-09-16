import React from 'react'
import styled from 'styled-components'


const SearchContainer = styled.div`



`
const Search = styled.input`
  

`

const Button = styled.button`
  background-color: red;
`;




const SearchBar = (props) => {
  return (
    <form>
      <SearchContainer>
        <Search onChange={props.onChange}></Search>
        <Button onClick={props.onClick}>Search</Button>
      </SearchContainer>
    </form>
  );
}

export default SearchBar

