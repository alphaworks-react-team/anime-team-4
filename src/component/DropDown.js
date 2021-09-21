import { useState } from 'react';
import styled from 'styled-components';
import CategoryLinks from './CategoryLinks';
import { FiMenu } from 'react-icons/fi';

const DropContainer = styled.div``;

const MenuBtn = styled.button`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  background: none;
  border: none;
  font-size: 40px;

  :hover {
    background-color: rgb(0, 0, 0, 0.2);
  }
`;

const Menu = styled.div`
  position: absolute;
  padding: 0.3rem;
  background: white;
  color: white;
  border: solid black;
`;

const DropDown = ({ category }) => {
  const [value, setValue] = useState(false);

  return (
    <DropContainer>
      <MenuBtn onClick={() => setValue(!value)}>
        <FiMenu />
      </MenuBtn>
      {value === true ? (
        <Menu>
          <CategoryLinks category={category} />
        </Menu>
      ) : null}
    </DropContainer>
  );
};

export default DropDown;
