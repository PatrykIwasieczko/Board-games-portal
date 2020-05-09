// React
import React from "react";

// Components
import Paragraph from "./Paragraph";

// Other libraries
import moment from "moment";

const Comment = (props) => {
    const { author, content, rating, complexity, date } = props.comment;
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
            <Paragraph>{author}</Paragraph>
            <Paragraph>{moment(new Date(+date)).fromNow()}</Paragraph>
            <Paragraph styles="mt-1">
                Rated {rating}
                <span> </span>
                {fillStars(rating)}
                {emptyStars(rating)}
            </Paragraph>
            <Paragraph styles="mb-1">
                Complexity: {complexity}
                <span> </span>
                {fillStars(complexity)}
                {emptyStars(complexity)}
            </Paragraph>
            <Paragraph>{content}</Paragraph>
        </div>
    );
};

export default Comment;
