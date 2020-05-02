import React from "react";
import Container from "../components/Container";
import Heading from "../components/Heading";

import { List, Space } from "antd";
import { MessageOutlined } from "@ant-design/icons";

const ForumPage = () => {
    const listData = [];
    for (let i = 0; i < 23; i++) {
        listData.push({
            href: "http://ant.design",
            title: `ant design part ${i}`,
            avatar:
                "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
            description:
                "Ant Design, a design language for background applications, is refined by Ant UED Team.",
            content:
                "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
        });
    }

    const IconText = ({ icon, text }) => (
        <Space>
            {React.createElement(icon)}
            {text}
        </Space>
    );
    return (
        <Container>
            <Heading>Forum Page</Heading>
            <List
                itemLayout="vertical"
                size="small"
                pagination={{
                    onChange: (page) => {
                        console.log(page);
                    },
                    pageSize: 10,
                }}
                dataSource={listData}
                // footer={
                //     <div>
                //         <b>ant design</b> footer part
                //     </div>
                // }
                renderItem={(item) => (
                    <List.Item
                        key={item.title}
                        actions={[
                            // <IconText
                            //     icon={StarOutlined}
                            //     text="156"
                            //     key="list-vertical-star-o"
                            // />,
                            // <IconText
                            //     icon={LikeOutlined}
                            //     text="156"
                            //     key="list-vertical-like-o"
                            // />,
                            <IconText
                                icon={MessageOutlined}
                                text="2"
                                key="list-vertical-message"
                            />,
                        ]}
                        extra={
                            <img
                                width={200}
                                alt="logo"
                                src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                            />
                        }
                    >
                        <List.Item.Meta
                            // avatar={<Avatar src={item.avatar} />}
                            title={
                                <a href={item.href}>{`${item.title.substring(
                                    0,
                                    100
                                )}...`}</a>
                            }
                            description={item.description}
                        />
                        {`${item.content.substring(0, 200)}...`}
                    </List.Item>
                )}
            />
        </Container>
    );
};

export default ForumPage;
