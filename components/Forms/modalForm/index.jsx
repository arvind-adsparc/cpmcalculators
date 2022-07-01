import { useState } from "react";
import { Form, Input, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import styles from "../../../styles/modalForm.module.scss";

const antIcon = (
  <LoadingOutlined
    style={{
      fontSize: 24,
    }}
    spin
  />
);

const ModalForm = () => {
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
    <div className={styles.modalForm}>
      <div className={styles.formHead}>
        Do you want to increase your current revenue by 30%?
      </div>

      <Form
        form={form}
        name="newsletter-form"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <div className={styles.group}>
          <Form.Item
            className="input-container"
            name="fullname"
            rules={[
              {
                required: true,
                message: "Please input your full name!",
              },
            ]}
            hasFeedback
            validateStatus={status}
          >
            <Input placeholder="Full Name" />
          </Form.Item>
          <Form.Item
            className="input-container"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your work email!",
                type: "email",
              },
            ]}
            hasFeedback
            validateStatus={status}
          >
            <Input placeholder="Work Email" />
          </Form.Item>
        </div>

        <div className={styles.group}>
          <Form.Item
            className="input-container"
            name="fullname"
            rules={[
              {
                required: true,
                message: "Please input your company name!",
              },
            ]}
            hasFeedback
            validateStatus={status}
          >
            <Input placeholder="Company Name" />
          </Form.Item>
        </div>

        <Form.Item>
          <div className="cta">
            {loading ? (
              <Spin indicator={antIcon} />
            ) : (
              <button className="btn pink">Get Started</button>
            )}
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ModalForm;
