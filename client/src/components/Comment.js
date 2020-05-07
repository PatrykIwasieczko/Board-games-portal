import React from "react";
import Paragraph from "./Paragraph";

const Comment = (props) => {
    const fillStars = (param) => {
        return [...Array(+param)].map((e, i) => (
            <i key={i} className="fas fa-star primary-dark"></i>
        ));
    };
    const emptyStars = (param) => {
        return [...Array(10 - +param)].map((e, i) => (
            <i key={i} className="far fa-star primary-dark"></i>
        ));
    };

    return (
        <div className="comment-card">
            <Paragraph>{props.author}</Paragraph>
            <Paragraph styles="my-1">
                Rated {props.rating}
                <span> </span>
                {fillStars(props.rating)}
                {emptyStars(props.rating)}
            </Paragraph>
            <Paragraph styles="mb-1">
                Complexity: {props.complexity}
                <span> </span>
                {fillStars(props.complexity)}
                {emptyStars(props.complexity)}
            </Paragraph>
            <Paragraph>{props.text}</Paragraph>
        </div>
    );
};

export default Comment;
