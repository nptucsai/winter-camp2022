import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import { fetchNavData, deleteNav } from '../../Store/nav.slice';

// Components
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import Button from '../Button';

const Container = styled.article`
  font-size: 1.8rem;

  h1 {
    font-size: 1.6em;
    width: 100%;
  }

  #nav-list {
    font-size: 1em;
    width: 100%;
  }

  #nav-list {
    display: table;
    table-layout: fixed;
    min-width: max(600px, calc(100vw - 120px));
    .nav-items {
      display: table-row;
      span {
        display: table-cell;
      }
    }
  }

  .nav-items span {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    padding: 5px 3px;
    border-bottom: 1px solid var(--color);
  }

  @media screen and (min-width: 651px) {
    .nav-items > span:first-child {
      width: 10ch;
      text-align: center;
    }
    .nav-items > span:nth-child(2) {
      width: 10ch;
    }
    .nav-items > span:last-child {
      text-align: right;
      width: max-content;
    }
  }

  .nav-items button {
    display: inline-flex;
    flex-column: row;
    justify-content: center;
    align-items: center;
    column-gap: 3px;
    margin: 0 5px;
  }

  @media screen and (max-width: 650px) {
    #nav-list {
      display: block;
      min-width: 80vw;

      .nav-items {
        display: flex;
        flex-direction: column;
        row-gap: 10px;

        border-bottom: 1px solid var(--color);
        padding: 25px 0;
      }

      .nav-items:first-child {
        padding-top: 10px;
      }
    }

    .nav-items > span {
      width: 100%;
      border: 0;
    }

    .nav-items > span:before {
      display: inline-block;
      text-align: right;
      width: 5ch;
      padding: 0 6px;
    }

    .nav-items > span:first-child:before {
      content: 'id: ';
    }
    .nav-items > span:nth-child(2):before {
      content: 'label: ';
    }

    .nav-items > span:nth-child(3):before {
      content: 'url: ';
    }
  }
`;

export default function NavControl() {
  const dispatch = useDispatch();
  const navList = useSelector((s) => s.nav);

  useEffect(() => {
    dispatch(fetchNavData());
  }, []);

  const handleDeleteButton = (e) => {
    const id = e.currentTarget.dataset.id;
    dispatch(deleteNav(id));
  };

  return (
    <Container>
      <h1>Nav control</h1>
      <article id="nav-list">
        {navList.map((x, i) => (
          <section key={i} className="nav-items">
            <span>{x.id.slice(0, 7)}</span>
            <span>{x.label}</span>
            <span>{x.url}</span>
            <span>
              <Button type="success">
                <AiOutlineEdit />
                <span>Edit</span>
              </Button>
              <Button type="danger" onClick={handleDeleteButton} data-id={x.id}>
                <AiOutlineDelete />
                <span>Delete</span>
              </Button>
            </span>
          </section>
        ))}
      </article>
    </Container>
  );
}
