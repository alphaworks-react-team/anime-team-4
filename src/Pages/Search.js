import React from 'react'
import styled from 'styled-components'

const SearchStyles=styled.div`

`

const Search = (props) => {
  return (
    <SearchStyles>
      {props.children}
    </SearchStyles>
  )
}

export default Search
