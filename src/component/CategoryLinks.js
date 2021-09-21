import React from "react";
import styled from "styled-components";

const Styled = styled.div`
  display: flex;
  flex-flow: wrap;
`;

const CategoryLinks = (props) => {
  return (
    <Styled>
      {props.category.map((item, index) => (
        <div key={index}>
          <a href={`/category/${item.id}`} alt="">
            {item.attributes.title}
          </a>
        </div>
      ))}
    </Styled>
  );
};

export default CategoryLinks;
