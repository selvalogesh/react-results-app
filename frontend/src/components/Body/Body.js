import React from 'react';
import PropTypes from 'prop-types';
import styles from './Body.module.css';
import Container from '@material-ui/core/Container';

import { Route, Switch } from 'react-router-dom';

import Login from '../Login'
import Result from '../Result'
import Logout from '../Logout'
import Error from '../PageNotFound'
import Analytics from '../Analytics'

const Body = () => {
  return (
    <div className={styles.Body} data-testid="Body">
      <Container>
        <Switch>
          <Route path="/" component={Login} exact />
          <Route path="/search" component={Login} />
          <Route path="/analytics" component={Analytics} />
          <Route component={Error} />
        </Switch>
      </Container>
    </div>
  );
}

Body.propTypes = {};

Body.defaultProps = {};

export default Body;
