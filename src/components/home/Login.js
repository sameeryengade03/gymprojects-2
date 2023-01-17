import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import style from './HomeModules/signup.module.css'
import { useRecoilState } from "recoil";
//import {LoginDetailsAtom} from './Atom.js'

function Login() {
  const navigate = useNavigate();
  const initialValues = { name: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  // const [userdetails,setuserdetails] = useRecoilState(LoginDetailsAtom);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);

    const loggedUser = JSON.parse(localStorage.getItem("registeredUserList"));
    const found = loggedUser.find(
      (user) =>
        user.name === formValues.name && user.password === formValues.password
    );
    if (found) {
      alert(`Welcome ${found.name}`);
      navigate('/');

      // setuserdetails({...userdetails,isLogin:true})
      // console.log(userdetails)
    } else {
      alert("wrong Credentials");
    }
    
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
    }
  }, [formErrors, isSubmit]);

  const validate = (values) => {
    const errors = {};
    var inValid = /\s/;
    if (inValid.test(values.name)) {
      errors.name = "*username name wouldn't have whiteSpace";
    } else if (inValid.test(values.email)) {
      errors.email = "*email wouldn't have whiteSpace";
    } else if (inValid.test(values.password)) {
      errors.password = "*password wouldn't have whiteSpace";
    }

    if (!values.name) {
      errors.name = "*Username is required!";
    }

    if (!values.password) {
      errors.password = "*Password is required";
    } else if (values.password.length < 8) {
      errors.password = "*Password must be more than 8 characters";
    } else if (values.password.length > 10) {
      errors.password = "*Password cannot exceed more than 10 characters";
    }
    return errors;
  };

  return (
    <>
    {/* <Header/> */}
      <form onSubmit={handleSubmit} className={style.maind}>
        <div  className={style.divv}>
          {Object.keys(formErrors).length === 0 && isSubmit ? (
            <div style={{ color: "green" }}>Signed in successfully</div>
          ) : null}
          <h1>Login</h1>
          <input
            className={style.inputt}
            type="text"
            name="name"
            placeholder="Username"
            value={formValues.name}
            onChange={handleChange}
          />
          <p style={{ color: "red" }}>{formErrors.name}</p>
          <input
             className={style.inputt}
            type="password"
            name="password"
            placeholder="Password"
            value={formValues.password}
            onChange={handleChange}
          />
          <p style={{ color: "red" }}>{formErrors.password}</p>
          <div >
            <p style={{color:"white"}}>
              Don't have an account?
              <br />
              <Link to="/signUp" style={{color:"blue"}}>Register</Link>
            </p>
            <button className={style.SignUpButton}>Login</button>
          </div>
        </div>
      </form>
    </>
  );
}

export default Login;
