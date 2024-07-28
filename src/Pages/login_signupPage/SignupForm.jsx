import React, { useState } from "react";
// import { RegisterUser } from "../../backendCalls/user";
import { Button, Checkbox, Form, Input, InputNumber, Select, message } from "antd";
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
  const [form] = Form.useForm();
  const [isStudent, setIsStudent] = React.useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [otpVerified, setOtpVerified] = useState(false);
  
  const onFinish = async (values) => {
    console.log("Received values of form: ", values);
    try {
      const res = await RegisterUser(values);
      if (res.success) {
        message.success('yoo! -> '+res.message);
        navigate('/login');
      } else {
        message.error('hi -> ' + res.message);
      }
    } catch (error) {
      console.log(error);
      message.error('no register -> ' + error.response.data.message);
    }
  };

  const handleGetOtpClick = () => {
    // Get email from form
    const email = form.getFieldValue("email");
    if (email) {
      sendOtp(email);
    } else {
      message.error("Please enter your email");
    }
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleVerifyOtp = async () => {
    // Get email from form
    const email = form.getFieldValue("email");
    try {
      const response = await fetch("http://localhost:4999/api/users/register/otp/verify_otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, otp }),
      });
      const data = await response.json();
      if (data.success) {
        setOtpVerified(true); // State to show final submit button
        message.success("OTP verified successfully");
      } else {
        message.error("Invalid OTP");
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      message.error("Failed to verify OTP");
    }
  };

  const sendOtp = async (email) => {
    try {
      const response = await fetch("http://localhost:4999/api/users/register/otp/send_otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      if (data.success) {
        setOtpSent(true); // State to show OTP input field
        message.success("OTP sent successfully");
      } else {
        message.error("Failed to send OTP");
      }
    } catch (error) {
      console.error("Error sending OTP:", error);
      message.error("Failed to send OTP");
    }
  };

  const handleEmailChange = (e) => {
    const email = e.target.value;
    if (email.endsWith("@sst.scaler.com")) {
      setIsStudent(true);
    } else {
      setIsStudent(false);
    }
  };

  return (
    <Form
      {...formItemLayout}
      form={form}
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
          {
            validator: (_, value) => {
              if (
                value.endsWith("@sst.scaler.com") ||
                value.endsWith("@scaler.com")
              ) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error(
                  "Please use only official scaler gmail id (@sst.scaler.com or @scaler.com)"
                )
              );
            },
          },
        ]}
      >
        <Input
          placeholder="@sst.scaler.com / @scaler.com"
          onChange={handleEmailChange}
        />
      </Form.Item>
      {/* OTP Button */}
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" onClick={handleGetOtpClick}>
          Get OTP
        </Button>
      </Form.Item>

      {/* OTP Input Field */}
      {otpSent && (
        <Form.Item
          name="otp"
          label="OTP"
          rules={[
            {
              required: true,
              message: "Please input the OTP sent to your email!",
            },
          ]}
        >
          <Input onChange={handleOtpChange} />
        </Form.Item>
      )}
      {/* Verify OTP Button */}
      {otpSent && (
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" onClick={handleVerifyOtp}>
            Verify OTP
          </Button>
        </Form.Item>
      )}
      {/* Show Final Submit Button if OTP is verified */}

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
        name="name"
        label="Name"
        tooltip="Your real name please"
        rules={[
          {
            type: "string",
            message: "not valid name",
          },
          {
            required: true,
            message: "Please input your name!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      {isStudent && (
        <>
          <Form.Item
            label="Scaler Id"
            name="scaler_id"
            tooltip="Your official Scaler Id"
            rules={[
              {
                required: true,
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
        </>
      )}

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
          You can't change these details later, please confirm all details.
          {/* Please confirm all details, you can't change them later. */}
        </Checkbox>
      </Form.Item>

      {otpVerified && (
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit" className="bg-purple-900">
          Register
        </Button>
      </Form.Item>
    )}
    </Form>
  );
};
