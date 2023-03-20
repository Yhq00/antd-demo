import React from "react";
import { Button, Card, Form, Input } from "antd";

const { TextArea } = Input;
const inputStyle = {
  display: "flex",
  width: "600px",
};
//统一输入框
const input = [
  { label: "姓名" },
  { label: "部门" },
  { label: "职位" },
  { label: "工号" },
  { label: "邮箱" },
];
const MapinputList = () => {
  const inputList = input.map((item) => {
    return (
      <Form.Item label={item.label}>
        <Input placeholder={item.label} style={inputStyle} disabled={true} />
      </Form.Item>
    );
  });
  return inputList;
};
const InfoComponent = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card
        title="基本信息"
        bordered={true}
        size={"small"}
        style={{ borderWidth: "10px", width: "800px", height: "auto" }}
      >
        <Form
          labelCol={{
            span: 24,
          }}
          labelAlign={"left"}
          wrapperCol={{
            span: 14,
          }}
          layout="horizontal"
          style={{
            width: "100%",
            // display: "flex",
            // flexDirection: "column",
            // justifyContent: "center",
            marginLeft: "70px",
          }}
        >
          <MapinputList />
          <Form.Item label="手机号">
            <div
              style={{
                display: "flex",
                width: "600px",
                justifyContent: "space-between",
              }}
            >
              <Input style={{ width: "500px" }} />
              <Button
                type="primary"
                htmlType="button"
                style={{ width: "100px" }}
              >
                修改
              </Button>
            </div>
          </Form.Item>
          <Form.Item label="TextArea">
            <div style={{ width: "600px", display: "flex" }}>
              <TextArea rows={4} />
            </div>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default InfoComponent;
