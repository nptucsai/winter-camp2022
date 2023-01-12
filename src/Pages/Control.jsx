import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

// Components
import _Main from '../Components/Main';
import ThemeSwitch from '../Components/ThemeSwitch';
import IconLink from '../Components/IconLink';
import { AiOutlineLink, AiOutlineHome } from 'react-icons/ai';

const Main = styled(_Main)`
  #feature {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    column-gap: 10px;
    padding: 20px;
  }

  #control {
    width: 80vw;
    min-width: min-content;
    margin: auto;
  }
`;

export default function Control() {
  const navigate = useNavigate();
  const token = useSelector((s) => s.auth);
  useEffect(() => {
    if (!token) navigate('/login');
  }, [token]);
  return (
    <Main>
      <section id="feature">
        <IconLink to="/" children={<AiOutlineHome />} />
        <IconLink to="/control/nav" children={<AiOutlineLink />} />
        <ThemeSwitch />
      </section>
      <section id="control">
        <Outlet />
      </section>
    </Main>
  );
}
