import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { revokeToken } from '../Store/auth.slice';

// Components
import _Main from '../Components/Main';
import ThemeSwitch from '../Components/ThemeSwitch';
import IconLink from '../Components/IconLink';
import { AiOutlineLink, AiOutlineHome, AiOutlineUser, AiOutlineLogout } from 'react-icons/ai';

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
  const dispatch = useDispatch();

  useEffect(() => {
    if (!token) navigate('/login');
  }, [token]);

  const logout = (e) => void dispatch(revokeToken());
  return (
    <Main>
      <section id="feature">
        <IconLink to="/" children={<AiOutlineHome />} />
        <IconLink to="/control/user" children={<AiOutlineUser />} />
        <IconLink to="/control/nav" children={<AiOutlineLink />} />
        <IconLink to="/login" onClick={logout} children={<AiOutlineLogout />} />
        <ThemeSwitch />
      </section>
      <section id="control">
        <Outlet />
      </section>
    </Main>
  );
}
