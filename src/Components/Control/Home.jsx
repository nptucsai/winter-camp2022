import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBasic, setBasic } from '../../Store/basic.slice';

// Components
import Button from '../Button';

const Container = styled.article`
  font-size: 1.8rem;

  h1 {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    column-gap: 25px;
  }

  h1 span {
    font-size: 1.6em;
  }

  table {
    border-spacing: 10px;
  }

  table * {
    font-size: 1em;
  }

  tbody td:first-child {
    text-align: right;
  }

  tbody tr:last-child td:first-child {
    vertical-align: top;
  }
  p {
    margin: 0;
    padding: 20px 0;
  }

  p button {
    margin: 0 10px;
  }

  @media screen and (max-width: 500px) {
    font-size: 1.2rem;
  }
`;

export default function Home() {
  const title = useSelector((s) => s.basic.HOME_TITLE);
  const rootSize = useSelector((s) => s.basic.HOME_FONT_SIZE);
  const titleSize = useSelector((s) => s.basic.HOME_TITLE_SIZE);
  const navSize = useSelector((s) => s.basic.HOME_NAV_SIZE);
  const extraStyle = useSelector((s) => s.basic.HOME_EXTRA_STYLE);

  const [tempTitle, setTempTitle] = useState(title);
  const [tempRootSize, setTempRootSize] = useState(rootSize);
  const [tempTitleSize, setTempTitleSize] = useState(titleSize);
  const [tempNavSize, setTempNavSize] = useState(navSize);
  const [tempExtraStyle, setTempExtraStyle] = useState(extraStyle);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBasic());
  }, []);

  useEffect(() => {
    handleResetButton();
  }, [title, rootSize, titleSize, navSize, extraStyle]);

  const handleInputChange = (e, setter) => void setter(e.target.value);
  const handleResetButton = (e) => {
    setTempTitle(title);
    setTempRootSize(rootSize);
    setTempTitleSize(titleSize);
    setTempNavSize(navSize);
    setTempExtraStyle(extraStyle);
  };
  const handleSaveButton = (e) => {
    const key = [
      'HOME_TITLE',
      'HOME_FONT_SIZE',
      'HOME_TITLE_SIZE',
      'HOME_NAV_SIZE',
      'HOME_EXTRA_STYLE'
    ];

    const values = [tempTitle, tempRootSize, tempTitleSize, tempNavSize, tempExtraStyle];

    const data = [];
    for (let i in key) data.push({ key: key[i], value: values[i] });

    dispatch(setBasic(data));
  };

  return (
    <Container>
      <h1>
        <span>Home control</span>
      </h1>
      <table>
        <tbody>
          <tr>
            <td>Title: </td>
            <td>
              <input value={tempTitle} onChange={(e) => handleInputChange(e, setTempTitle)} />
            </td>
          </tr>
          <tr>
            <td>Root Size: </td>
            <td>
              <input value={tempRootSize} onChange={(e) => handleInputChange(e, setTempRootSize)} />
            </td>
          </tr>
          <tr>
            <td>Title Size: </td>
            <td>
              <input
                value={tempTitleSize}
                onChange={(e) => handleInputChange(e, setTempTitleSize)}
              />
            </td>
          </tr>
          <tr>
            <td>Nav Size: </td>
            <td>
              <input value={tempNavSize} onChange={(e) => handleInputChange(e, setTempNavSize)} />
            </td>
          </tr>
          <tr>
            <td>Style: </td>
            <td>
              <textarea
                value={tempExtraStyle}
                onChange={(e) => handleInputChange(e, setTempExtraStyle)}
              ></textarea>
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        <Button type="danger" onClick={handleResetButton}>
          Reset
        </Button>
        <Button type="success" onClick={handleSaveButton}>
          Save
        </Button>
      </p>
    </Container>
  );
}
