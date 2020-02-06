import React from "react";



const Card = props => {

    const imgsrc = props.data.url;

    console.log(props.data.url)
    return (
        <div>Hey!2
            <img src={imgsrc} />
        </div>
        
    )
};

export default Card;