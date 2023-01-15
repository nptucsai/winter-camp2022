import React from 'react';
import styled from 'styled-components';
import { Link as link } from 'react-router-dom';
import { AiOutlineHome, AiOutlineUser, AiOutlineLink } from 'react-icons/ai';

const GridSection = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, 100px);
  justify-content: center;
  column-gap: 15px;
  row-gap: 25px;
  padding: 20px 0;
`;

const Link = styled(link)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  row-gap: 5px;
  width: 120px;
  color: inherit;
  text-decoration: none;
  font-size: 2.4rem;
  svg {
    font-size: 1.2em;
  }
  span {
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-align: center;
  }
`;

export default function Basic() {
  return (
    <GridSection>
      <Link to="/control/home">
        <AiOutlineHome />
        <span>Home</span>
      </Link>
      <Link to="/control/user">
        <AiOutlineUser />
        <span>User</span>
      </Link>
      <Link to="/control/nav">
        <AiOutlineLink />
        <span>Nav</span>
      </Link>
    </GridSection>
  );
}
