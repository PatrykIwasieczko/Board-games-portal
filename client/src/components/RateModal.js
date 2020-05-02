import React, { useState } from "react";

import { Modal, Input, Rate } from "antd";

const desc = [
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

const RateModal = (props) => {
    const [rateValue, setRateValue] = useState(5);
    const [review, setReview] = useState();

    const handleChange = (value) => {
        setRateValue(value);
    };

    const handleReviewChange = (event) => {
        setReview(event.target.value);
    };
    return (
        <Modal
            title="Rate a game"
            visible={props.isModalVisible}
            onOk={() => props.handleOk(rateValue, review)}
            onCancel={props.handleCancel}
        >
            <Rate
                allowHalf
                count={10}
                tooltips={desc}
                onChange={handleChange}
                value={rateValue}
            />

            <Input
                placeholder="Write your opinion about this game"
                onChange={handleReviewChange}
            />
        </Modal>
    );
};

export default RateModal;
