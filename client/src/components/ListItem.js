import React from "react";
import Paragraph from "./Paragraph";

const ListItem = (props) => {
    return (
        <div styles={props.styles ? `${props.styles} list-item` : "list-item"}>
            <Paragraph>{props.title}</Paragraph>
            <Paragraph>{props.text}</Paragraph>
        </div>
    );
};

export default ListItem;
