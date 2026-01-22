import {ImageStatus} from "../index";
import "./Card.css";
import Button from "../Button/Button";


function Card(props) {
    return (
        <div>
        <ImageStatus imageUrl={props.imageUrl}/>
        <h3>
          {props.texto}
        </h3>
        <p>
          {props.category}
        </p>
        <h4>$
          {props.price}
        </h4>
       <Button/>
    </div>
    );
}

export default Card;