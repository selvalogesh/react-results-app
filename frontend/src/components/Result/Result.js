import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom'

import { useAppContext } from "../../libs";

import './Result.module.css';

import { JSONToHTMLTable } from '@kevincobain2000/json-to-html-table'

const Result = () => {

  let { isAuthenticated, userData } = useAppContext();

  return (
    <div className='Result' data-testid="Result">
      {isAuthenticated ?
        <JSONToHTMLTable
          data={userData}
        // tableClassName={ styles.rtable }
        /> :
        <p><Link to="/login">Login</Link> to view result</p>}
    </div>
  );
}

Result.propTypes = {};

Result.defaultProps = {};

export default Result;
