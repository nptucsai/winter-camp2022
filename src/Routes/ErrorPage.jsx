import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Main from '../Components/Main';

const Container = styled(Main)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 2.4rem;
  row-gap: 15px;

  * {
    color: var(--color);
  }

  P {
    margin: 0;
  }

  p:last-child {
    font-size: 0.8em;
  }

  span {
    padding: 0 20px;
  }

  span:first-child {
    border-right: 1px solid var(--color);
  }
`;

export default function () {
  return (
    <Container>
      <p>
        <span>404</span>
        <span>Not Found.</span>
      </p>
      <p>
        <Link to="/">Back to home.</Link>
      </p>
    </Container>
  );
}
