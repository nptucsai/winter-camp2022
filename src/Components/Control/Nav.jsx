import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import { fetchNavData, deleteNav, addNav, editNav } from '../../Store/nav.slice';

// Components
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import { MdOutlineAdd } from 'react-icons/md';
import Button from '../Button';
import Popup from '../Popup';

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
      span:not(:last-child) {
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

  @media screen and (min-width: 671px) {
    .nav-items > span:first-child {
      width: 10ch;
      text-align: center;
    }
    .nav-items > span:nth-child(2) {
      width: 10ch;
    }
    .nav-items > span:last-child {
      display: block;
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

  @media screen and (max-width: 670px) {
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
  @media screen and (max-width: 400px) {
    h1 > span {
      font-size: 1.4em;
    }
  }
`;

const Form = styled.form`
  color: var(--color);
  font-size: 2rem;
  width: 100%;
  margin: auto;
  box-sizing: border-box;
  section {
    margin: 20px 0;
    display: flex;
    flex-direction: column;
    row-gap: 3px;
  }

  * {
    font-size: 1em;
  }
`;

export default function NavControl() {
  const dispatch = useDispatch();
  const navList = useSelector((s) => s.nav);
  const [popupTrigger, setPopupTrigger] = useState(0);

  const [labelValue, setLabel] = useState('');
  const [urlValue, setUrl] = useState('');

  useEffect(() => {
    dispatch(fetchNavData());
  }, []);

  const handleDeleteButton = (e) => {
    const id = e.currentTarget.dataset.id;
    dispatch(deleteNav(id));
  };

  const handleFormSubmit = (e) => {
    if (popupTrigger === '_NEW_') dispatch(addNav(labelValue, urlValue));
    else dispatch(editNav(popupTrigger, labelValue, urlValue));
    setPopupTrigger(0);
    e.preventDefault();
  };

  const handleEditButton = (e) => {
    const id = e.currentTarget.dataset.id;

    const { label, url } = navList.find((x) => x.id === id);

    setLabel(label);
    setUrl(url);
    setPopupTrigger(id);
  };

  const handleNewButton = (e) => {
    setLabel('');
    setUrl('');
    setPopupTrigger('_NEW_');
  };

  return (
    <Container>
      <h1>
        <span>Nav control</span>
        <Button type="info" onClick={handleNewButton}>
          <MdOutlineAdd />
          <span>New</span>
        </Button>
      </h1>
      <article id="nav-list">
        {navList.map((x, i) => (
          <section key={i} className="nav-items">
            <span>{x.id.slice(0, 7)}</span>
            <span>{x.label}</span>
            <span>{x.url}</span>
            <span>
              <Button type="success" onClick={handleEditButton} data-id={x.id}>
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
      <Popup
        open={!!popupTrigger}
        onClose={(e) => setPopupTrigger(0)}
        closeOnDocumentClick
        position="right center"
        nested
        modal
      >
        <Form onSubmit={handleFormSubmit}>
          <section>
            <label>Label:</label>
            <input value={labelValue} onChange={(e) => setLabel(e.target.value)} />
          </section>
          <section>
            <label>url:</label>
            <input
              placeholder="https://"
              value={urlValue}
              onChange={(e) => setUrl(e.target.value)}
            />
          </section>
          <section>
            <input type="submit" />
          </section>
        </Form>
      </Popup>
    </Container>
  );
}
