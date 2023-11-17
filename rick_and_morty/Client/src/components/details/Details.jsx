import style from "./Details.module.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
export default function Details() {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);
  return (
    <div className={style.container}>
      <div className={style.card}>
        <button className={style.butt}> <Link to='/home' className={style.buto}>BACK</Link></button>
        <div className={style.image}>
          <img className={style.imgcon} src={character.image} alt="" />
        </div>
        <p className={style.dates}>
          <b className={style.name}>Nombre: {character.name}</b>
          <b className={style.name}>Estado: {character.status}</b>
          <b className={style.name}>Especie: {character.species}</b>
          <b className={style.name}>Genero: {character.gender}</b>
        </p>
      </div>
    </div>
  );
}
