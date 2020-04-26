import React from "react";

const Card = (props) => {
    return (
        <div className={props.styles ? `card ${props.styles}` : "card"}>
            {props.children}
        </div>
    );
};

export default Card;
