import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Main = styled.main`
  width: 100vw;
  min-height: 100vh;
  font-family: -apple-system, system-ui, 'Segoe UI', Helvetica, Arial, sans-serif,
    'Apple Color Emoji', 'Segoe UI Emoji';

  background: var(--${(props) => props.theme}-bg-color);
  color: var(--${(props) => props.theme}-font-color);
  --background: var(--${(props) => props.theme}-bg-color);
  --color: var(--${(props) => props.theme}-font-color);
`;

export default function ({ children, className }) {
  const theme = useSelector((s) => s.theme);
  return (
    <Main className={className} theme={theme}>
      {children}
    </Main>
  );
}
