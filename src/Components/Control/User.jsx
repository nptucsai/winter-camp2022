import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { addUser, fetchUser, removeUser } from '../../Store/user.slice';

// Components
import Button from '../Button';
import { AiOutlineUserAdd, AiOutlineDelete } from 'react-icons/ai';
import Popup from '../Popup';

const Container = styled.article`
  font-size: 1.8rem;

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

  table {
    border-spacing: 20px;
  }

  @media screen and (max-width: 500px) {
    width: 90vw;
    h1 > span {
      font-size: 1.2em;
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

export default function User() {
  const dispatch = useDispatch();
  const users = useSelector((s) => s.user);
  const [popupTrigger, setPopupTrigger] = useState(false);
  const [nameValue, setNameValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  useEffect(() => void dispatch(fetchUser()), []);

  const handleDeleteButton = (e) => {
    const id = e.currentTarget.dataset.id;
    dispatch(removeUser(id));
  };

  const handleFormSubmit = (e) => {
    dispatch(addUser(nameValue, passwordValue));
    setNameValue('');
    setPasswordValue('');
    setPopupTrigger(false);
    e.preventDefault();
  };

  return (
    <Container>
      <h1>
        <span>User control</span>
        <Button type="info" onClick={(e) => void setPopupTrigger(true)}>
          <AiOutlineUserAdd />
          <span>Add User</span>
        </Button>
      </h1>
      <table>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id.slice(0, 7)}</td>
              <td>{user.name}</td>
              <td>
                <Button type="danger" data-id={user.id} onClick={handleDeleteButton}>
                  <AiOutlineDelete />
                  <span>Delete</span>
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Popup
        open={popupTrigger}
        onClose={(e) => setPopupTrigger(false)}
        closeOnDocumentClick
        position="right center"
        nested
        modal
      >
        <Form onSubmit={handleFormSubmit}>
          <section>
            <label>Name:</label>
            <input value={nameValue} onChange={(e) => setNameValue(e.target.value)} />
          </section>
          <section>
            <label>password:</label>
            <input value={passwordValue} onChange={(e) => setPasswordValue(e.target.value)} />
          </section>
          <section>
            <input type="submit" />
          </section>
        </Form>
      </Popup>
    </Container>
  );
}
