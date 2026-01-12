import "./ImageStatus.css";

function ImageStatus(props) {
    return ( <div>
        <img className="image-div" src={props.imageUrl}></img>
    </div>
    );
}

export default ImageStatus;