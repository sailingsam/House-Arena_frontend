import React, { useState } from "react";
// import { RegisterUser } from "../../backendCalls/user";  
import {
  // AutoComplete,
  Button,
  // Cascader,
  Checkbox,
  // Col,
  Form,
  Input,
  InputNumber,
  // Row,
  Select,
} from "antd";
const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};
export default () => {
  // const [form] = Form.useForm();
  const onFinish = async (values) => {
    console.log("Received values of form: ", values);
    // try {
    //   const res = await RegisterUser(values);
    //   if (res.success) {
    //     message.success('yoo! -> '+res.message);
    //     // navigate('/login');
    //   } else {
    //     message.error('hi -> ' + res.message);
    //   }
    // } catch (error) {
    //   console.log(error);
    //   message.error('no register -> ' + error.response.data.message);
    // }
  };

  return (
    <Form
      {...formItemLayout}
      // form={form}
      name="register"
      onFinish={onFinish}
      style={{
        maxWidth: 600,
      }}
      scrollToFirstError
    >
      <Form.Item
        name="email"
        label="E-mail"
        tooltip="Please use only official scaler gmail id"
        rules={[
          {
            type: "email",
            message: "The input is not valid E-mail!",
          },
          {
            required: true,
            message: "Please input your E-mail!",
          },
        ]}
      >
        <Input placeholder="@sst.scaler.com / @scaler.com" />
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        placeholder="d"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm pass"
        label="Confirm Password"
        dependencies={["password"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please confirm your password!",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error("The new password that you entered do not match!")
              );
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        label="Scaler Id"
        name="scaler_id"
        tooltip="Your official Scaler Id"
        rules={[
          {
            required: false,
            message: "Please input!",
          },
        ]}
      >
        <InputNumber
          style={{
            width: "100%",
          }}
        />
      </Form.Item>

      <Form.Item
        name="house"
        label="House"
        rules={[
          {
            required: true,
            message: "Please select house!",
          },
        ]}
      >
        <Select placeholder="select your house">
          <Option value="Kong">Kong</Option>
          <Option value="Leo">Leo</Option>
          <Option value="Phoenix">Phoenix</Option>
          <Option value="Tusker">Tusker</Option>
        </Select>
      </Form.Item>

      <Form.Item
        name="leetcode_id"
        label="Leetcode Id"
        tooltip="Your official leetcode id"
        rules={[
          {
            required: true,
            message: "Please input your leetcode official id!",
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            required: true,
          },
          {
            validator: (_, value) =>
              value
                ? Promise.resolve()
                : Promise.reject(new Error("Should accept agreement")),
          },
        ]}
        {...tailFormItemLayout}
      >
        <Checkbox>
          Please confirm all details, you can't change them later.
        </Checkbox>
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button
          type="primary"
          // onClick={onFinish}
          htmlType="submit"
          className="bg-purple-900"
        >
          Register
        </Button>
      </Form.Item>
    </Form>
  );
};
