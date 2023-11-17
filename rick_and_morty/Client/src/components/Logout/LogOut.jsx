import React from 'react';
import style  from "./LogOut.module.css"
function Logout({ onLogout }) {
    return (
      <button onClick={onLogout} className={style.links}>Log Out</button>
    );
  }
  
  export default Logout;