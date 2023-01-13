import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNavData } from '../Store/nav.slice';

// Components
import _Main from '../Components/Main';
import ThemeSwitch from '../Components/ThemeSwitch';

const Main = styled(_Main)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-size: 2rem;

  & > h1 {
    font-size: 1.6em;
    margin: 0;
    text-align: center;
    border-bottom: 1px solid var(--color);
  }

  & > nav {
    font-size: 1em;

    ul {
      list-style-type: none;
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      padding: 0;
    }

    ul li {
      padding: 0 15px;
      font-size: 1em;
      white-space: nowrap;
    }

    ul li:not(:last-child) {
      border-right: 1px solid var(--color);
    }

    a {
      color: inherit;
      text-decoration: none;
    }
  }

  button#theme-switch {
    position: fixed;
    top: 20px;
    right: 20px;
  }

  @media screen and (max-width: 750px) {
    font-size: 1.6rem;
  }

  @media screen and (max-width: 600px) {
    main > h1 {
      border-bottom: 1px solid #f1f6f5;
      font-size: 4rem;
    }
    nav ul {
      flex-direction: column;
    }

    nav ul li {
      padding: 8px 0;
      font-size: 2.4rem;
    }

    nav ul li:not(:last-child) {
      border-right: none;
    }
  }
`;

export default function Home() {
  const navList = useSelector((s) => s.nav);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNavData());
  }, []);

  return (
    <Main>
      <h1>NPTU CSAI Winter Camp</h1>
      <nav>
        <ul>
          {navList.map((item, index) => (
            <li key={index}>
              <a href={item.url}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
      <ThemeSwitch />
    </Main>
  );
}
