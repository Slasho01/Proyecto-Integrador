import { React, useEffect, useState } from "react";
import "./App.css";
/*** Hello***/
import Cards from "./components/cards/Cards.jsx";
import Favorites from "./components/favorites/Favorites.jsx";
import NavBar from "./components/nav/Nav.jsx";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import About from "./components/about/About";
import Details from "./components/details/Details";
import Login from "./components/Login/login";
function App() {
  const [characters, characterSet] = useState([]);
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();  
  const URL = 'http://localhost:3001/rickandmorty/';
  function login({ email, password}) {
    axios(`${URL}login` + `?email=${email}&password=${password}`)
    .then(({ data }) => {
       const { access } = data;
       console.log(access)
       access && navigate('/home');
    });
  }
  function logout() {
    setAccess(false);
    navigate("/");
  }

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  function onClose(id) {
    characterSet(characters.filter((character) => character.id !== id));
  }

  async function onSearch(characterId) {
  try {
    const connect = await axios.get(`http://localhost:3001/rickandmorty/character/${characterId}`)
    if(connect.status === 200){
      const dataChar = connect.data
      if(dataChar.name){
        if (document.getElementById(dataChar.id) == null) {
          characterSet((oldChars) => [...oldChars, dataChar]);
        }
      }else{
        window.alert("No hay personajes con ese Id");
      }
    }else{
      throw new Error('Error de conexion')
    }
  }catch(error){
     console.error('Error', error)
  }
    /* fetch(`http://localhost:3001/rickandmorty/character/${characterId}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.name) {
          console.log(data.name);
          if (document.getElementById(data.id) == null) {
            characterSet((oldChars) => [...oldChars, data]);
          }
        } else {
          window.alert("No hay personajes con ese Id");
        }
      }); */
  }

  const location = useLocation();
  return (
    <div className="App">
      {location.pathname !== "/" && (
        <NavBar onSearch={onSearch} onLogout={logout} />
      )}
      <Routes>
        <Route path="/" element={<Login login={login} />}></Route>
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/about" element={<About />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
