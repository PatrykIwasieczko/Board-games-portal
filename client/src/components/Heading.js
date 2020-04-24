import React from "react";

const Heading = (props) => {
    return (
        <h2 className={props.styles ? `heading ${props.styles}` : "heading"}>
            {props.children}
        </h2>
    );
};

export default Heading;
