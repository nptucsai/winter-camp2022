import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { switchTheme } from '../Store/theme.slice';

// Components
import { MdBrightnessAuto, MdLightMode, MdDarkMode } from 'react-icons/md';

const Button = styled.button`
  background: transparent;
  border: none;
  color: inherit;
  font-size: 2.4rem;

  display: flex;
  justify-content: center;
  align-items: center;

  ${(props) => props.styled ?? ''}
`;

export default function ThemeSwitch(props) {
  const theme = useSelector((s) => s.theme);
  const dispatch = useDispatch();

  const handleButtonOnClick = (e) => void dispatch(switchTheme());

  return (
    <Button id="theme-switch" theme={theme} onClick={handleButtonOnClick} {...props}>
      {theme === 'auto' && <MdBrightnessAuto />}
      {theme === 'light' && <MdLightMode />}
      {theme === 'dark' && <MdDarkMode />}
    </Button>
  );
}
