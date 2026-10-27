import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.css';

import { Link } from 'react-router-dom'

const Header = () => (
  <div className={styles.Header} data-testid="Header">
    <div className={styles['div-header']}>
      Header Component
      <div>
        <Link to="/search">Search</Link>
        <Link to="/analytics">Analytics</Link>
      </div>
    </div>
  </div>
);

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
