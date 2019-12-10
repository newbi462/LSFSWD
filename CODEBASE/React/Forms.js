
// BASIC FORMS
/*
PROJECT

/home/omega/Desktop/CODE SCHOOL/UNIT2/team-builder/team-builder


*/


// FORMICK
/*
1) npm install formik --save

2) see docs
https://jaredpalmer.com/formik/docs/overview

3) add to App
import FormikForm from "./Components/Form";

4) import to where you build form
import {withFormik, Form, Field } from "formik";


*/

//FROM FROM PROJEC
// /home/omega/Desktop/CODE SCHOOL/UNIT2/User-Onboarding
import React, { useState, useEffect } from "react";

import {withFormik, Form, Field } from "formik";
import * as Yup from "yup"; // for everything
import axios from "axios";


const PreFormikForm = ( { values, errors, touched, status } ) => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    status && setUsers(users => [...users, status]);
  }, [status]);

//PART ! build the form using FORMIK tags, you must IMPORT THEM see above 
  return (
    <Form>
      <Field type="text" name="name" placeholder="Your Name" />
      {touched.name && errors.name && (
        <p className="errors">{errors.name}</p>
      )}

      <Field type="text" name="email" placeholder="E-Mail" />
      {touched.email && errors.email && (
        <p className="errors">{errors.email}</p>
      )}

      <Field as="select" name="role" >
        <option>Please Choose Your Role</option>
        <option value="web25">Web 25</option>
        <option value="team-lead">Team Lead</option>
        <option value="master-of-the-universe">Master of the Universe</option>
      </Field>

      <Field type="password" name="password" placeholder="Password" />

      <label className="checkbox-container">
        Check to agree to the TOS
        <Field
          type="checkbox"
          name="tos"
          checked={values.tos}
        />
      </label>
      {touched.tos && errors.tos && (
        <p className="errors">{errors.tos}</p>
      )}

      <button>Submit</button>

      {users.map(item => (
        <>
        <h2>Name: {item.name}</h2>
        <ul key={item.id}>
          <li>Email: {item.email}</li>
          <li>Role: {item.role}</li>
        </ul>
        </>
      ))}
    </Form>


  );
};


// PART 2 (MANDITORY) this makes form work must in port each name="" value
const FormikForm = withFormik({
  mapPropsToValues({ name, email, password, tos, role }) {
    return {
      name: name || "",
      email: email || "",
      password: password || "",
      tos: tos || false,
      role: role || "",
    };
  },
// Part 3 (OPTINAL)  YUP handels erros
  validationSchema: Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string().required(),
    tos: Yup.boolean().oneOf([true], "You must agree to the TOS")
  }),
//Part 4 (OPTINAL)  AXIOS puses data if sentid out to an API or DATAPASE
  handleSubmit(values, { setStatus }) {
    axios
      .post("https://reqres.in/api/users/", values)
      .then(response => {
        setStatus(response.data);
        console.log(response);
      })
      .catch(error => console.log(error.response));
  }
})(PreFormikForm);
export default FormikForm;
