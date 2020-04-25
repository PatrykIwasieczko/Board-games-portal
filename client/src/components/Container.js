// React
import React from "react";

const Container = (props) => {
    return (
        <div
            className={props.styles ? `container ${props.styles}` : "container"}
        >
            {props.children}
        </div>
    );
};

export default Container;
