import React, { useState } from "react";

import { Modal, Input, Rate } from "antd";
import SizedBox from "./SizedBox";

const rates = [
    "would never play again",
    "terrible",
    "very bad",
    "bad",
    "average",
    "good",
    "very good",
    "excellent",
    "fantastic",
    "the best game",
];
const complexities = [
    "no complexity",
    "very easy",
    "family level game",
    "easy",
    "average",
    "average, but has some complex rules",
    "easy to learn hard to master",
    "complex",
    "very complex",
    "takes a lot of time to understand",
];

const RateModal = (props) => {
    const [rateValue, setRateValue] = useState(5);
    const [complexityValue, setComplexityValue] = useState(5);
    const [review, setReview] = useState();

    const handleRateChange = (value) => {
        setRateValue(value);
    };
    const handleComplexityChange = (value) => {
        setComplexityValue(value);
    };

    const handleReviewChange = (event) => {
        setReview(event.target.value);
    };
    return (
        <Modal
            title="Rate a game"
            visible={props.isModalVisible}
            onOk={() =>
                props.handleOk({
                    author: "Author",
                    rating: rateValue,
                    content: review,
                    complexity: complexityValue,
                })
            }
            onCancel={props.handleCancel}
        >
            Rating:{" "}
            <Rate
                count={10}
                tooltips={rates}
                onChange={handleRateChange}
                value={rateValue}
            />
            <SizedBox />
            Complexity:{" "}
            <Rate
                count={10}
                tooltips={complexities}
                onChange={handleComplexityChange}
                value={complexityValue}
            />
            <SizedBox space="1" />
            <Input
                placeholder="Write your opinion about this game"
                onChange={handleReviewChange}
            />
        </Modal>
    );
};

export default RateModal;
