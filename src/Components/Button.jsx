import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  --success-border: #d6e9c6;
  --success-color: #3c763d;
  --success-bg: #dff0d8;

  --info-border: #bce8f1;
  --info-color: #31708f;
  --info-bg: #d9edf7;

  --danger-border: #ebccd1;
  --danger-color: #a94442;
  --danger-bg: #f2dede;

  --warning-border: #faebcc;
  --warning-color: #8a6d3b;
  --warning-bg: #fcf8e3;

  appearance: none;
  background-color: ${(props) => `var(--${props.type}-bg)`};
  border: 1px solid ${(props) => `var(--${props.type}-border)`};
  border-radius: 6px;
  box-sizing: border-box;
  color: ${(props) => `var(--${props.type}-color)`};
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system, system-ui, 'Segoe UI', Helvetica, Arial, sans-serif,
    'Apple Color Emoji', 'Segoe UI Emoji';
  font-weight: 600;
  line-height: 20px;
  padding: 2px 8px;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  white-space: nowrap;
  font-size: 0.8em;
`;

export default function _Button({ children, ...props }) {
  return <Button {...props}>{children}</Button>;
}
