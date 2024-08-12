import React, { useState } from "react";
import {
  Button,
  Checkbox,
  Form,
  Input,
  InputNumber,
  Select,
  message,
} from "antd";
const { Option } = Select;
import { RegisterUser } from "../../backendCalls/auth/registerUser";
import { useNavigate } from "react-router-dom";

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
  const [isStudent, setIsStudent] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const navigate = useNavigate();

  const onFinish = async (values) => {
    console.log("Received values of form: ", values);
    try {
      const res = await RegisterUser(values);
      if (res.success) {
        message.success("yoo! -> " + res.message);
        navigate("/login");
      } else {
        message.error("oops! " + res.message);
      }
    } catch (error) {
      console.log(error);
      message.error("can't register -> " + error.message);
    }
  };

  const handleGetOtpClick = async () => {
    const email = form.getFieldValue("email");
    if (email) {
      try {
        await sendOtp(email);
        message.success("OTP sent successfully");
        setOtpSent(true);
      } catch (error) {
        message.error("Failed to send OTP");
      }
    } else {
      message.error("Please enter a valid email");
    }
  };

  const handleVerifyOtp = async () => {
    const email = form.getFieldValue("email");
    const otpentered = form.getFieldValue("otp");
    try {
      const response = await fetch(
        "https://house-arena-backend.onrender.com/api/users/register/otp/verify_otp",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, otp: otpentered }),
        }
      );
      const data = await response.json();
      if (data.success) {
        message.success("OTP verified successfully");
        setOtpVerified(true);
        
      } else {
        message.error("Invalid OTP");
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
    }
  };

  const sendOtp = async (email) => {
    try {
      const response = await fetch(
        "https://house-arena-backend.onrender.com/api/users/register/otp/send_otp",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );
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

      {!otpVerified && (
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" onClick={handleGetOtpClick}>
            {otpSent ? "Resend OTP" : "Send OTP"}
          </Button>
        </Form.Item>
      )}

      {!otpVerified && otpSent && (
        <>
          <Form.Item name="otp" label="OTP" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" onClick={handleVerifyOtp}>
              Verify OTP
            </Button>
          </Form.Item>
        </>
      )}

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
