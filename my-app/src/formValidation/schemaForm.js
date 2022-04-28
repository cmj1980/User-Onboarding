import * as yup from "yup";

const schemaForm = yup.object().shape({
    username: yup
    .string()
    .trim()
    .required("Username Requied")
    .min(3, "3 character min"),
    email: yup
    .string()
    .email("Must use valid email")
    .required('Valid email is required'),
    password: yup
    .string()
    .required("Password is required!")
    .min(8, "Password must be at least 8 characters long!"),
    checkedBox: yup
    .boolean()
    .oneOf([true], "Must accept Terms of Server to apply"),
    accounts: yup
    .string()
    
});

export default schemaForm;