import styled from 'styled-components';
import { IoMoonOutline } from 'react-icons/io5';

import { Container } from '../container';
import { Weather } from '../header/weather';

const HeaderEl = styled.header`
  box-shadow: var(--shadow);
  background-color: var(--colors-ui-base);
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
`;

export const Header = () => {
    return (
        <HeaderEl>
            <Container>
                <Wrapper>
                    <Weather />
                    <IoMoonOutline />
                </Wrapper>
            </Container>
        </HeaderEl>
    )
}