import React from "react";
import Paragraph from "./Paragraph";

const Comment = (props) => {
    const filledStars = [...Array(props.rating)].map((e, i) => (
        <i key={i} className="fas fa-star primary-dark"></i>
    ));
    const emptyStars = [...Array(10 - props.rating)].map((e, i) => (
        <i key={i} className="far fa-star primary-dark"></i>
    ));

    return (
        <div className="comment-card">
            <Paragraph>{props.author}</Paragraph>
            <Paragraph>
                Rated {props.rating} {filledStars}
                {emptyStars}
            </Paragraph>
            <Paragraph>{props.text}</Paragraph>
        </div>
    );
};

export default Comment;
