import React from "react";
import { Card, CardImg } from "reactstrap";


const ICard = props => {

    const imgsrc = props.data.url;

    console.log(props.data.url)
    return (
        <div>
            <Card>
                <CardImg className="rounded align-self-center" height="100%" src={imgsrc} alt="space capture of the day from nasa"></CardImg>
            </Card>

        </div>
        
    )
};

export default ICard;