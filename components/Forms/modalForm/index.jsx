import { useState } from "react";
import Router from "next/router";
import axios from "axios";
import { Form, Input, Select, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import styles from "../../../styles/modalForm.module.scss";

const { Option } = Select;

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

  const onFinish = async (values) => {
    setLoading(true);

    try {
      const data = {
        fullName: values.fullname,
        email: values.email,
        company: values.companyName,
        pageViews: values.views,
      };

      const headers = {
        "Content-Type": "application/json",
      };
      await axios.post(`/api/increase-revenue`, data, { headers });
      setLoading(false);
      setStatus("success");
      form.resetFields();
      Router.push("/thank-you");
    } catch (err) {
      setLoading(false);
      setStatus("error");
      console.log("err", err);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className={styles.modalForm}>
      <div className={styles.formHead}>
        Ready to increase your ad revenue by 30%?
      </div>

      <Form
        form={form}
        name="modal-form"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autocomplete="off"
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
            <Input placeholder="Email" />
          </Form.Item>
        </div>

        <div className={styles.group}>
          <Form.Item
            className="input-container"
            name="companyName"
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

          <Form.Item
            name="views"
            rules={[
              {
                required: true,
                message: "Please select an option!",
              },
            ]}
            hasFeedback
            validateStatus={status}
          >
            <Select placeholder="Monthly Pages View">
              <Option value="less than 1 million">less than 1 million</Option>
              <Option value="1 - 5 million">1 - 5 million</Option>
              <Option value="5 - 20 million">5 - 20 million</Option>
              <Option value="20 million+">20 million+</Option>
            </Select>
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
