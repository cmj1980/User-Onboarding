import React, { useState, }  from 'react';
import './App.css';
import Form from './componets/Form';
import schema from './formValidation/schemaForm';
import * as yup from 'yup';

const initialFormValues = {
  username: "",
  password: "",
  email: "",
  checkedBox: false,
  accountType:"",
}
const initialFormErrors = {
  username: "",
  password: "",
  email: "",
  checkedBox: "",
  accountType:"",
}

function App() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors)

  const submitHandler = () => {

  }

  const validate = (name, value) => {
    yup.reach(schema, name)
    .validate(value)
    .then(() => setFormErrors({ ...formErrors, [name]: "" }))
    .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }

  const changeHandler = (name, value) => {
    validate(name, value);
    setFormValues({ ...formValues, [name]: value})
  }

  return (
    <div className="App">
       <Form values={formValues} change={changeHandler} errors={formErrors} />
    </div>
  );
}

export default App;
