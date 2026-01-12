import {ImageStatus} from "../index";
import "./Card.css";

function Card(props) {
    return (
        <div className="cardContainer">
        <ImageStatus imageUrl={props.imageUrl}/>
        <h3>
          {props.texto}
        </h3>
        <p>
          {props.category}
        </p>
        <h4>
          {props.price}
        </h4>
        
    </div>
    );
}

export default Card;