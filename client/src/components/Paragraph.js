// React
import React from "react";

const Paragraph = (props) => {
    return (
        <p className={props.styles ? `paragraph ${props.styles}` : "paragraph"}>
            {props.children}
        </p>
    );
};

export default Paragraph;
