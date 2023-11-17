import style from "./login.module.css";
import React, { useState } from "react";
import validation from './validation'
export default function Login(props) {
  const [userData, setUserData] = useState({
    email: '',
    password: ''
})
const [errors, setError] = useState({
  email: '',
  password: ''
})

function handleChange(e){
  setUserData({...userData, [e.target.name]: e.target.value})
  setError(validation(({...userData, [e.target.name]: e.target.value})))
}
function handleSubmit(e){
  e.preventDefault();
  props.login(userData);
}
  return (
    <div className={style.login}>
      <img src="" alt="" />
      <h2>Login</h2>
      <form className={style.formu} onSubmit={handleSubmit}>
        <label>E-mail: </label>
        <input type="text" name="email" value={userData.email} onChange={handleChange}/>
        <p>{errors.email}</p>

        <label>Password: </label>
        <input type="password" name="password" value={userData.password} onChange={handleChange}/>
        <p>{errors.password}</p>
        <button className={style.but}>Login</button>
      </form>
    </div>
  );
}