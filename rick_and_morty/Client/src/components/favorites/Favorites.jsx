import Card from "../card/Card";
import { useState } from 'react';
import { connect, useDispatch } from "react-redux";
import { orderCards, filterCards } from '../../redux/actions/actions';
/* import style from '../card/Card.module.css' */
export function Favorites({ favorites }){
  const dispatch = useDispatch();
  const [aux, setAux] = useState(false);
  const handleOrder = (e) => {
    setAux(!aux);
    dispatch(orderCards(e.target.value));
  };
  const handleFilter = (e) => {
    dispatch(filterCards(e.target.value));
    console.log(e.target.value)
  };
    return(
        <div>
            <div>
            <select onChange={handleFilter}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">unknown</option>
            </select>
            <select onChange={handleOrder}>
            <option value="A">Ascendente</option>
            <option value="D">Descendente</option>
            </select>
            </div>
            {favorites?.map((e) => 
                <Card
                id={e.id}
                key={e.id}
                name={e.name}
                status={e.status}
                species={e.species}
                gender={e.gender}
                origin={e.origin}
                image={e.image}
              />
            )}
        </div>
    )
}

export function mapStateToProps(state){
    return{
        favorites: state.favorites,
    }
}

export default connect(mapStateToProps)(Favorites);