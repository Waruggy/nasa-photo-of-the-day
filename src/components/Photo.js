import React from "react";

//const Photo = props => (<div>
//      <h3>{props.photo.title}</h3>
//    <img src={props.photo.url} alt={props.photo.title} />
//    <p>{props.photo.explanation}</p>
//    </div>);

function Photo(props){
    return(
        <div>
        <img src={props.photo} alt="NASA Daily Photo" />
        </div>
    )
}

export default Photo;