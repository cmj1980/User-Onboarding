import React, { useState, }  from 'react';
import './App.css';
import Form from './componets/Form';
import schema from './formValidation/schemaForm';
import * as yup from 'yup';
import axios from 'axios';

const initialFormValues = {
  username: "",
  password: "",
  email: "",
  checkedBox: false,
  accounts:"",
}
const initialFormErrors = {
  username: "",
  password: "",
  email: "",
  checkedBox: "",
  accounts:"",
}

function App() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [users, setUsers] = useState([]);

  const submitHandler = () => {
     axios.post("https://reqres.in/api/users", formValues)
     .then(res => {
        //console.log(res)
        setUsers([ res.data, ...users ])
     })
     .catch(err => console.error(err))
     .finally(() => setFormValues(initialFormValues));

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
       <Form 
       values={formValues} 
       change={changeHandler} 
       errors={formErrors} 
       submit={submitHandler}
       />
       {users.map(user => {
         return (
         <div key={user.id}>
           <p>{user.username}</p>
           <p>{user.email}</p>
           <p>{user.accounts}</p>
           </div> )
       })}
    </div>
  );
}

export default App;
