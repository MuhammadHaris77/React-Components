import React from "react"; 



export default function Header(props) {
    return (
        <div className="main">
            <img src={props.imgSrc} width="250px" height="190" />
            <h1>{props.name}</h1>
             <p>{props.description}</p>
            <div className="detail">
            <h6>Price :{props.price}</h6>
            <h5>Location :{props.location}</h5>
            </div>
        </div>
    )

}