import React from "react";
import { Card, Avatar, Skeleton } from "antd";
const { Meta } = Card;

export default function LoadingComponent() {
  return (
    <Card
      style={{
        width: 300,
        height: 200,
        padding: 30,
        margin: 20,
      }}
    >
      <Skeleton avatar active>
        <Meta
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title="Card title"
          description="This is the description"
        />
      </Skeleton>
    </Card>
  );
}
