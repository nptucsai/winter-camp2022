import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNavData } from '../Store/nav.slice';
import { fetchBasic } from '../Store/basic.slice';

// Components
import _Main from '../Components/Main';
import ThemeSwitch from '../Components/ThemeSwitch';

const Main = styled(_Main)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-size: ${({ rootSize }) => rootSize};

  & > h1 {
    font-size: ${({ titleSize }) => titleSize};
    margin: 0;
    text-align: center;
    border-bottom: 1px solid var(--color);
  }

  & > nav {
    font-size: ${({ navSize }) => navSize};

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

  ${(props) => props.extraStyle}
`;

export default function Home() {
  const navList = useSelector((s) => s.nav);
  const title = useSelector((s) => s.basic.HOME_TITLE);
  const rootSize = useSelector((s) => s.basic.HOME_FONT_SIZE);
  const titleSize = useSelector((s) => s.basic.HOME_TITLE_SIZE);
  const navSize = useSelector((s) => s.basic.HOME_NAV_SIZE);
  const extraStyle = useSelector((s) => s.basic.HOME_EXTRA_STYLE);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNavData());
    dispatch(fetchBasic());
  }, []);

  return (
    <Main rootSize={rootSize} titleSize={titleSize} navSize={navSize} extraStyle={extraStyle}>
      <h1>{title}</h1>
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
