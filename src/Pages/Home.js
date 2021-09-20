import React from "react";
import styled from "styled-components";


const HomeStyle = styled.div`

`

const Home = (props) => {
  return (
    <HomeStyle>
      {props.children}
    </HomeStyle>
  );
};

export default Home;
