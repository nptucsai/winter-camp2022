import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../Store/scores.slice';

// Components
import _Main from '../Components/Main';
import { MdArrowBack } from 'react-icons/md';
import IconLink from '../Components/IconLink';

const Main = styled(_Main)`
  font-size: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;

  ul {
    margin: 0;
  }

  a {
    position: fixed;
    top: 20px;
    left: 20px;
  }
`;

export default function ScoreBoard() {
  const team = useSelector((x) => x.scores);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
    const interval = setInterval(() => void dispatch(fetchData()), 10000);
    return () => void clearInterval(interval);
  }, []);

  return (
    <Main>
      <IconLink to="/">
        <MdArrowBack />
      </IconLink>
      <ol>
        {[]
          .concat(team)
          .sort((x, y) => y.score - x.score)
          .map((n) => (
            <li key={n.id}>
              {n.team} / {n.score}
            </li>
          ))}
      </ol>
    </Main>
  );
}
