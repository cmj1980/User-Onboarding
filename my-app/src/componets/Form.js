import React from 'react';


const Form = (props) => {
    const { change, submit, errors } = props;
    const { username, password, email, checkedBox, accountType } = props.values;

    const onChange = (evt) => {
         const { name, value, checked, type } = evt.target;
         const newValue = type === "checkbox" ? checked : value;
         change(name, newValue);
         }

    const onSubmit = (evt) => {
        evt.preventDefault();
        submit();
    }

    return (
        <div>
           <h1>Create Account App</h1>
          
           <form name="form" onSubmit={onSubmit}>
               <label>Name:
                   <input
                        type="text"
                        name="username"
                        value={username}
                        onChange={onChange}
                        />
                </label>
                <label>Email:
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={onChange}
                        />
                </label>
                <label>Password
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={onChange}
                    />
                </label>
                <label>Select Account type
                     <select 
                        onChange={onChange}                  
                         value={accountType}
                         name="accounts"
                         required>
                        <option value="">-Choose Account Type-</option>
                        <option value="checking">Checking</option>
                        <option value="savings">Savings</option>
                        <option value="busisness">Business</option>
                        <option value="auto-loan">Auto Loan</option>
                        <option value="home-loan">Home Loan</option>
                     </select>
                </label>
                <label>Argee to our TOS please:
                    <input
                        type="checkbox"
                        name='checkedBox'
                        checked={checkedBox}
                        onChange={onChange}
                    />
                </label>
                <input type="submit" value="Create Account"/>
                <p>{errors.username}</p>
            <p>{errors.password}</p>
            <p>{errors.email}</p>
            <p>{errors.checkedBox}</p>
            <p>{errors.accountType}</p>
            </form>
        </div>

    )
}

export default Form;