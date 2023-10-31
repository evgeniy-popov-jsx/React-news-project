import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react'; 
import { setTheme } from '../../store/theme/theme-actions';

import { IoMoonOutline, IoMoon } from 'react-icons/io5';

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

const ModeSwitcher = styled.div`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  cursor: pointer;
  text-transform: capitalize;
`;

export const Header = () => {
    const dispath = useDispatch();
    const theme = useSelector(state => state.themeReducer);
    const toggleTheme = () => dispath(setTheme(theme === 'light' ? 'dark' : 'light'));
    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
      }, [theme]);
    return (
        <HeaderEl>
            <Container>
                <Wrapper>
                    <Weather />
                    <ModeSwitcher onClick={toggleTheme} >
                        {theme === 'light' ? (
                            <IoMoonOutline size="14px" />
                        ) : (
                        <IoMoon size="14px" />
                        )}
          </ModeSwitcher>
                </Wrapper>
            </Container>
        </HeaderEl>
    )
}