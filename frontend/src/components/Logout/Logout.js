import React from 'react';
import PropTypes from 'prop-types';
import styles from './Logout.module.css';

import { CircularProgress } from '@material-ui/core';
import { useAppContext } from "../../libs";


const Logout = (props) => {

  let { setUserData, userHasAuthenticated } = useAppContext();

  const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }

  React.useEffect(() => {
    setUserData(null);
    userHasAuthenticated(false);
    sleep(1000).then(() => {
      props.history.push("/login")
    })
  }, []);

  return (
    <div className={styles.Logout} data-testid="Logout">
      <CircularProgress disableShrink size={20} /> Logging out...
    </div>
  );
}

Logout.propTypes = {};

Logout.defaultProps = {};

export default Logout;
