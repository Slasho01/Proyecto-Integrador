import SearchBar from "../searchBar/SearchBar";
import style from "./Nav.module.css";
import { Link } from "react-router-dom";
import Logout  from "../Logout/LogOut.jsx"
/* import style from "./searchBar/SearchBar.module.css"; */
export default function NavBar({onSearch, onLogout, access}) {
  return (
    <nav className={style.nav}>
      <Link to='/' className={style.icon}>
      <img className={style.logoImg}
        src="https://i.ibb.co/QYZrTmZ/pngegg.png"
        alt="pngegg"
        border="0"
      />
      </Link>
        <Link to='/home' className={style.links}>Home</Link>
        <Link to='/favorites' className={style.links}>Favorites</Link>
        <Link to='/about' className={style.links}>About</Link>
        {!access && <Logout onLogout={onLogout}/>}
        <SearchBar onSearch={onSearch}/>
    </nav>
  );
}
