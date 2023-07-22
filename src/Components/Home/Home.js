import React from 'react';
import { Link } from 'react-router-dom';
import Styled from './Home.module.css';

const Home = () => {
  return (
    <div className={Styled.container}>
      <h1>Welcome to Your Home Page</h1>
      <div className={Styled.buttonsContainer}>
        <Link to="/my-table" className={Styled.link}>
          <button className={Styled.button}>My Table</button>
        </Link>
        <Link to="/chart" className={Styled.link}>
          <button className={Styled.button}>Chart</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
