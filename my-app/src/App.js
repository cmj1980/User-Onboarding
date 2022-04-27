import React, { useState, }  from 'react';
import './App.css';
import Form from './componets/Form';

const initialFormValues = {
  username: "",
  password: "",
  email: "",
  checkedBox: false,
  accountType:"",
}


function App() {
  const [formValues, setFormValues] = useState(initialFormValues);

  const submitHandler = () => {

  }

  const changeHandler = (name, value) => {
    setFormValues({...formValues, [name]: value})
  }

  return (
    <div className="App">
       <Form values={formValues} change={changeHandler} />
    </div>
  );
}

export default App;
