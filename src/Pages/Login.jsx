import React, { useEffect, useRef } from 'react';
import styled, { ThemeConsumer } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { verifyToken, login } from '../Store/auth.slice';

// Components
import _Main from '../Components/Main';
import _ThemeSwitch from '../Components/ThemeSwitch';

const Main = styled(_Main)`
  display: flex;
  justify-content: center;
  align-items: center;

  form {
    border: 2px solid var(--color);
    border-radius: 10px;
    padding: 20px;
    display: table;
  }

  form :is(label, input) {
    font-size: 1.6rem;
    display: table-cell;
    margin: 10px 3px;
  }

  form label {
    text-align: right;
  }

  form input {
    border: 1px solid var(--color);
    background: var(--background);
    color: var(--color);
    outline: 0;
  }

  form section {
    display: table-row;
  }

  form input[type='submit'] {
    float: right;
    background-color: #2ea44f;
    border: 1px solid rgba(27, 31, 35, 0.15);
    border-radius: 6px;
    box-shadow: rgba(27, 31, 35, 0.1) 0 1px 0;
    box-sizing: border-box;
    color: #fff;
    cursor: pointer;
    font-family: -apple-system, system-ui, 'Segoe UI', Helvetica, Arial, sans-serif,
      'Apple Color Emoji', 'Segoe UI Emoji';
    padding: 3px 10px;
  }

  form input[type='submit']:after {
    content: '';
    clear: right;
  }

  @media screen and (max-width: 400px) {
    form {
      border: 0px;
    }

    form section {
      display: block;
    }
  }
`;

const ThemeSwitch = styled(_ThemeSwitch)`
  position: fixed;
  top: 20px;
  right: 20px;
`;

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((s) => s.auth);
  const nameInput = useRef(null);
  const passwordInput = useRef(null);

  useEffect(() => {
    dispatch(verifyToken());
  }, []);

  useEffect(() => {
    if (token) navigate('/control');
  }, [token]);

  const handleLogin = (e) => {
    const name = nameInput.current.value;
    const password = passwordInput.current.value;
    dispatch(login(name, password));

    e.preventDefault();
  };

  return (
    <Main>
      <form onSubmit={handleLogin}>
        <section>
          <label htmlFor="username">Name: </label>
          <input id="username" ref={nameInput} />
        </section>
        <section>
          <label htmlFor="password">Password: </label>
          <input id="password" ref={passwordInput} />
        </section>
        <section>
          <label></label>
          <input type="submit" value="Login" />
        </section>
      </form>
      <ThemeSwitch />
    </Main>
  );
}
