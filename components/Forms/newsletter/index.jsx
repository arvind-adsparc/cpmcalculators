import { useState } from "react";
import { Form, Input, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const antIcon = (
  <LoadingOutlined
    style={{
      fontSize: 24,
    }}
    spin
  />
);

const NewsletterForm = () => {
  const [form] = Form.useForm();

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const onFinish = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
      <Form
        form={form}
        name="newsletter-form"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          className="input-container"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
              type: "email",
            },
          ]}
          hasFeedback
          validateStatus={status}
        >
          <Input placeholder="Your Email" />
        </Form.Item>

        <Form.Item>
          <div className="cta">
            {loading ? (
              <Spin indicator={antIcon} />
            ) : (
              <button className="btn pink">Subscribe</button>
            )}
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default NewsletterForm;
