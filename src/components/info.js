import React from "react";

const Info = props => {



    return (
        <div>
            <h2>{props.data.title}</h2>
            <p>{props.data.date}</p>
            <p>{props.data.explanation}</p>
        </div>
    )
}

export default Info;