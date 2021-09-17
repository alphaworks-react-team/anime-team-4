import React from "react";
import styled from "styled-components";


const HomeStyle = styled.div`
  display:flex;
  flex-flow: wrap;
  justify-content:space-evenly;
  align-items:center;

`

const Home = (props) => {
  return (
    <HomeStyle>
      {props.trending.map((item, index) => (
        <div key={index}>
          <p>
            {item.attributes.titles.en}
          </p>
          <img src={item.attributes.posterImage.small} alt=""  />
          <div>
            {item.attributes.ageRating}
          </div>
        </div>
      ))}
    </HomeStyle>
  );
};

export default Home;
