import React from 'react';
import PropTypes from 'prop-types';
import styles from './Login.module.css';

import { useFormik } from 'formik';
import { useAppContext } from "../../libs";

import * as Yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const Login = (props) => {

  const data = {
    "id": "0001",
    "type": "donut",
    "name": "Cake",
    "ppu": 0.55,
    "topping":
      [
        { "id": "5001", "type": "None" },
        { "id": "5002", "type": "Glazed" },
        { "id": "5005", "type": "Sugar" },
        { "id": "5007", "type": "Powdered Sugar" },
        { "id": "5006", "type": "Chocolate" },
        { "id": "5003", "type": "Chocolate" },
        { "id": "5004", "type": "Maple" }
      ]
  };

  let { isAuthenticated, userHasAuthenticated } = useAppContext();
  let { setUserData } = useAppContext();

  const curday = (sp) => {
    const today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1; //As January is 0.
    const yyyy = today.getFullYear();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;
    return yyyy + sp + mm + sp + dd;
  }

  const sleep = (milliseconds) => new Promise((r) => setTimeout(r, milliseconds));

  const onSubmitForm = async (values) => {
    //sleep(500).then(alert(JSON.stringify(values, null, 2)))
    userHasAuthenticated(true);
    setUserData(data);
    props.history.push("/result")
  }

  const validationSchema = Yup.object({
    searchId: Yup.string()
      .max(10, 'Too Long!')
      .required('Required'),
    searchField: Yup.string()
      .required('Required'),
  });

  const formik = useFormik({
    initialValues: {
      searchId: '',
      searchField: curday('-'),
    },
    validationSchema: validationSchema,
    onSubmit: onSubmitForm,
  });

  return (
    <div className={styles.Login} data-testid="Login">
      <h2>Login</h2>

      <form className={styles.form} onSubmit={formik.handleSubmit}>

        <div>
          <TextField
            id="searchId"
            name="searchId"
            label="Policy or Customer Id"
            floatingLabelText="Policy or Customer Id"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.rollNumber}
            error={formik.touched.rollNumber && Boolean(formik.errors.rollNumber)}
            helperText={formik.touched.rollNumber && formik.errors.rollNumber}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>

        <div>
          <TextField
            id="DOB"
            name="DOB"
            label="Date of birth"
            floatingLabelText="Date of birth"
            type="date"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.DOB}
            error={formik.touched.DOB && Boolean(formik.errors.DOB)}
            helperText={formik.touched.DOB && formik.errors.DOB}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>

        <div>
          <Button variant="contained" color="primary" type="submit">Submit</Button>
        </div>
      </form>
    </div>
  );
}

Login.propTypes = {};

Login.defaultProps = {};


export default Login;