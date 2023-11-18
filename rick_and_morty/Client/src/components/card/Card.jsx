import style from "./Card.module.css";
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions/actions";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
function Card(props) {
  const [isFav, setIsFav] = useState(false);
  useEffect(() => {
    props.favorites &&
      props.favorites.forEach((fav) => {
        if (fav.id === props.id) {
          setIsFav(true);
        }
      });
  }, [props.favorites]);

  function handleFavorito() {
    if (isFav) {
      setIsFav(false);
      props.REMOVE_FAV(props.id);
    } else {
      setIsFav(true);
      props.ADD_FAV({
        name: props.name,
        status: props.status,
        species: props.species,
        gender: props.gender,
        origin: props.origin,
        image: props.image,
        id: props.id
      });
    }
  }
  return (
    <div className={style.container} id={props.id}>
      {isFav ? (
        <button className={style.fav} onClick={handleFavorito}>
          ❤️
        </button>
      ) : (
        <button className={style.fav} onClick={handleFavorito}>
          🤍
        </button>
      )}
      <button className={style.close} onClick={props.onClose}>
        x
      </button>
      <Link
        to={`/Details/${props.id}`}
        style={{ textDecoration: "none", color: "white" }}
      >
        <h2 className={style.name}>{props.name}</h2>
      </Link>
      {/*          <h2>Estatus: {props.status}</h2>
         <h2 className={style.especie}>Especie: {props.species}</h2> */}
      <h2 className={style.gender}>Genero: {props.gender}</h2>
      <h2 className={style.especie}>Origen: {props.origin}</h2>
      <img className={style.image} src={props.image} alt={props.id} />
    </div>
  );
}
export function mapStateToProps(state) {
  return {
    favorites: state.favorites,
  };
}
export function mapDispatchToProps(dispatch) {
  return {
    ADD_FAV: (personaje) => dispatch(addFav(personaje)),
    REMOVE_FAV: (id) => dispatch(removeFav(id)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Card);

