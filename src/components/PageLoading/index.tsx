import React from "react";
import { Spin } from "antd";

const PageLoading: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "79vh",
        overflow: "hidden",
      }}
    >
      <Spin size="large" />
    </div>
  );
};

export default PageLoading;
