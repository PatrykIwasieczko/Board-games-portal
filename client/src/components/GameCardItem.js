import React from "react";
import { List, Avatar, Divider } from "antd";
// import { List, Avatar } from "@ant-design/icons";
import Paragraph from "./Paragraph";
import SizedBox from "./SizedBox";

const GameCardItem = (props) => {
    return (
        <List
            itemLayout="horizontal"
            dataSource={props.data}
            renderItem={(game) => (
                <List.Item>
                    <List.Item.Meta
                        avatar={<Avatar src={game.img} />}
                        title={<a href="https://ant.design">{game.title}</a>}
                        description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                    />
                </List.Item>
            )}
        />
    );
};
export default GameCardItem;
