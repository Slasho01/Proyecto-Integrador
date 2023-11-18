import Card from '../card/Card';

export default function Cards(props) {
   const { characters, onClose } = props;
   
   return (
      <div>{
      characters.map(card =>(
         <Card
          id={card.id}
          key={card.id}
          name={card.name}
          status={card.status}
          species={card.species}
          gender={card.gender}
          origin={card.origin.name}
          image={card.image}
          onClose={()=> onClose(card.id)}
        />
      ))
   }</div>
   )
}