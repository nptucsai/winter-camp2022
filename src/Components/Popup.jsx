import React from 'react';
import _Popup from 'reactjs-popup';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const Popup = styled(_Popup)`
  &-overlay {
    background: #8e8e8e80;
  }
  &-content {
    font-family: -apple-system, system-ui, 'Segoe UI', Helvetica, Arial, sans-serif,
      'Apple Color Emoji', 'Segoe UI Emoji';
    padding: 20px;
    border-radius: 15px;
    max-width: 100vw;

    color: var(--${(props) => props.theme}-bg-color);
    background: var(--${(props) => props.theme}-font-color);
    --color: var(--${(props) => props.theme}-bg-color);
    --background: var(--${(props) => props.theme}-font-color);
  }
`;

export default function ({ ...props }) {
  const theme = useSelector((s) => s.theme);
  return <Popup {...props} theme={theme} />;
}
