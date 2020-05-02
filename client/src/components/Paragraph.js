// React
import React from "react";

const Paragraph = (props) => {
    return (
        <p
            onClick={props.onClick}
            className={props.styles ? `paragraph ${props.styles}` : "paragraph"}
        >
            {props.children}
        </p>
    );
};

export default Paragraph;
