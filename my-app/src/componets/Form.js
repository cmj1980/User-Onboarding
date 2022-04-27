import React from 'react';


const Form = (props) => {
    const { change, submit } = props;
    const { username, email, password, checked, } = props.values;

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
           <form onSubmit={onSubmit}>
               <label>Name:
                   <input
                        type="text"
                        name="name"
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
                     <select name="accounts" id="account-type" required>
                        <option value="">Choose Account Type</option>
                        <option value="checking">Checking</option>
                        <option value="savings">Savings</option>
                        <option value="busisness">Business</option>
                        <option value="home-loan">Home Loan</option>
                     </select>
                </label>
                <label>Argee to our TOS please:
                    <input
                        type="checkbox"
                        name='tos'
                        checked={checked}
                        onChange={onChange}
                    />
                </label>
                <input type="submit" value="Create Account"/>
            </form>
        </div>

    )
}

export default Form;