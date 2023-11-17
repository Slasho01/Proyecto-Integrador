import Card from "../card/Card";
import { connect } from "react-redux";
/* import style from '../card/Card.module.css' */
export function Favorites({ favorites }){
    return(
        <div>
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