import { useState } from "react";
import axios from "axios";
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

// const API_URL = "https://cpmcalculators.vercel.app";
const NewsletterForm = () => {
  const [form] = Form.useForm();

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const onFinish = async (values) => {
    setLoading(true);

    try {
      const data = {
        email: values.email,
        page: "test page 1",
      };

      const headers = {
        "Content-Type": "application/json",
      };
      await axios.post(`/api/subscribe`, data, { headers });
      setLoading(false);
      setStatus("success");
      form.resetFields();
    } catch (err) {
      setLoading(false);
      setStatus("error");
      console.log("err", err);
    }
  };
  const onFinishFailed = (errorInfo) => {
    // console.log("Failed:", errorInfo);
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
