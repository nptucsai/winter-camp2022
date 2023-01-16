import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import {
  fetchData,
  addTeam,
  deleteTeam,
  increaseScore,
  decreaseScore
} from '../../Store/scores.slice';

// Components
import { MdOutlineAdd } from 'react-icons/md';
import Button from '../Button';

const Container = styled.article`
  font-size: 1.8rem;
  width: inherit;

  h1 {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    column-gap: 25px;
  }

  h1 > span {
    font-size: 1.6em;
  }

  h1 > button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }

  article section {
    border-bottom: 1px solid var(--color);
    padding: 10px 0;
    display: flex;
    align-items: center;

    column-gap: 10px;

    & > button:first-child {
      background: transparent;
      color: var(--color);
      border: 0;
      font-size: 1em;
    }

    span:nth-child(2) {
      width: 8ch;
    }

    span:nth-child(3) {
      width: 10ch;
      text-align: right;
    }

    span:nth-child(4) {
      width: 8ch;
      text-align: right;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    span:nth-child(5) {
      button {
        margin: 2px 5px;
      }
    }
  }
  @media screen and (max-width: 450px) {
    font-size: 1.6rem;
  }
  @media screen and (max-width: 350px) {
    font-size: 1.4rem;
  }
`;

export default function NavControl() {
  const scores = useSelector((x) => x.scores);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  const handleAddNewTeam = (e) => {
    const name = prompt('Please enter team name.');

    if (name) {
      dispatch(addTeam(name));
    }
  };

  const handleDeleteTeam = (e) => {
    if (!confirm('Sure to delete team?')) return;

    const id = e.currentTarget.parentElement.dataset.id;
    dispatch(deleteTeam(id));
  };

  const handleIncreaseScore = (e) => {
    const id = e.currentTarget.parentElement.parentElement.dataset.id;

    const score = prompt('Enter score.');
    if (score) dispatch(increaseScore(id, score));
  };

  const handleDecreaseScore = (e) => {
    const id = e.currentTarget.parentElement.parentElement.dataset.id;

    const score = prompt('Enter score.');
    if (score) dispatch(decreaseScore(id, score));
  };

  return (
    <Container>
      <h1>
        <span>Score Board</span>
        <Button type="info" onClick={handleAddNewTeam}>
          <MdOutlineAdd />
          <span>New</span>
        </Button>
      </h1>
      <article>
        {scores.map((x) => (
          <section key={x.id} data-id={x.id}>
            <button onClick={handleDeleteTeam}>X</button>
            <span>{x.id.slice(0, 7)}</span>
            <span>{x.team}</span>
            <span>{x.score}</span>
            <span>
              <Button type="danger" onClick={handleDecreaseScore}>
                扣分
              </Button>
              <Button type="success" onClick={handleIncreaseScore}>
                加分
              </Button>
            </span>
          </section>
        ))}
      </article>
    </Container>
  );
}
