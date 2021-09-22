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
  color: rgb(237, 246, 249, 0.9);

  :hover {
    color: rgb(230, 57, 70);
  }
`;

const MenuPosition=styled.div`
display: flex;
justify-content: center;
`

const Menu = styled.div`
  text-align: center;
  font-size: 20px;

  position: absolute;
  padding: 1rem;
  letter-spacing: 0.05rem;
  border-radius: 5px;
  background: rgb(29, 53, 87);

  a:visited,
  a:link,
  a:active {
    text-decoration: none;
    color: rgb(237, 246, 249, 0.9);
    :hover {
      color: rgb(230, 57, 70);
    }
  }
`;

const DropDown = ({ category }) => {
  const [value, setValue] = useState(false);

  return (
    <DropContainer>
      <MenuBtn onClick={() => setValue(!value)}>
        <FiMenu />
      </MenuBtn>
      {value === true ? (
        <MenuPosition>
          <Menu>
            <CategoryLinks category={category} />
          </Menu>
        </MenuPosition>
      ) : null}
    </DropContainer>
  );
};

export default DropDown;
