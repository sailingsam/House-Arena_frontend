import React, { useState } from "react";
import HAwhiteblock from "../../assets/HAlogosvg/HAwhiteblock.svg";
import { NavLink, useNavigate } from "react-router-dom";
import HAblackblock from "../../assets/HAlogosvg/HAblackblock.svg";
import { Form, Input, Button, message } from "antd";
import { loginUser } from "../../backendCalls/auth/loginUser";
import { useDispatch } from "react-redux";
import { isTokenValid } from "../../utils/auth";
import { setUser } from "../../redux/actions/authActions";
import {
  ResetPassword,
  SendOtp,
  VerifyOtp,
} from "../../backendCalls/auth/ForgotPassword";
import Loader from "../../Components/Loader";

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
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [isStudent, setIsStudent] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSendOtp = async () => {
    const email = form.getFieldValue("email");
    console.log(`email ${email}`);
    setLoading(true);
    const response = await SendOtp(email);
    setLoading(false);
    if (response.success) {
      message.success("OTP sent successfully");
      setOtpSent(true);
    } else {
      message.error("Failed to send OTP");
    }
  };

  const handleVerifyOtp = async () => {
    const email = form.getFieldValue("email");
    const otpentered = form.getFieldValue("otp");
    const response = await VerifyOtp(email, otpentered);
    if (response.success) {
      message.success("OTP verified successfully");
      setOtpVerified(true);
    } else {
      message.error("Invalid OTP");
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


  const onFinish = async (values) => {
    console.log("Received values of form: ", values);
    const { email, password } = values;
    console.log("Updating password for:", email);
    setLoading(true);
    const response = await ResetPassword({ email, password });
    setLoading(false);
    console.log("Update password response:", response);
    if (response.success) {
      message.success("Password updated successfully");
    } else {
      message.error("Failed to update password");
    }
  };

  return (
    <main className="w-full flex">
      {loading && <Loader LoaderData="Sending OTP..." />}
      <div className="relative flex-1 hidden items-center justify-center h-screen bg-gray-900 lg:flex">
        <div className="relative z-10 w-full max-w-md">
          <img src={HAwhiteblock} width={450} />
          <div className=" mt-16 space-y-3">
            <h3 className="text-white text-3xl font-bold">
              Unlock the Gateway to Your House's Glory!
            </h3>
            <p className="text-gray-300">
              No worries, we've got you covered. Just enter your email below,
              and we'll send you instructions to reset your password. If you
              need any help, feel free to reach out to our support team!
            </p>
            <div className="flex items-center -space-x-2 overflow-hidden">
              <img
                src="https://randomuser.me/api/portraits/women/79.jpg"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <img
                src="https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=a72ca28288878f8404a795f39642a46f"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <img
                src="https://randomuser.me/api/portraits/men/86.jpg"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <img
                src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=3759e09a5b9fbe53088b23c615b6312e"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <p className="text-sm text-gray-400 font-medium translate-x-5">
                {`We are waiting... ;)`}
              </p>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-0 my-auto h-[500px]"
          style={{
            background:
              "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)",
            filter: "blur(118px)",
          }}
        ></div>
      </div>
      <div className="flex-1 flex items-center justify-center h-screen bg-white">
        <div className="w-full max-w-md space-y-4 px-10  text-gray-600 sm:px-0">
          <img src={HAblackblock} width={250} className="lg:hidden m-auto" />
          <div className="flex-col text-center justify-around items-center space-y-2">
            <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl mb-2">
              Forgot Password?
            </h3>
            <p className="font-semibold text-gray-400">
              No Problem,We got you covered.{" "}
            </p>
          </div>

          <Form
            {...formItemLayout}
            form={form}
            name="restPass"
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
                      "Please use only official scaler gmail id (@sst.scaler.com or @scaler.com)"
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
            <Form.Item
              name="otp"
              label="OTP"
              rules={[
                {
                  required: true,
                  message: "Please input your OTP!",
                },
              ]}
              hasFeedback
            >
              <Input.Password placeholder="Enter OTP" />
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
              <Button
                type="primary"
                onClick={handleSendOtp}
                className="max-w-fit px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 duration-150"
              >
                Send OTP
              </Button>
            </Form.Item>
            {otpSent && (
              <Form.Item {...tailFormItemLayout}>
                <Button
                  type="primary"
                  onClick={handleVerifyOtp}
                  className="max-w-fit px-4 py-2 mx-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 duration-150"
                >
                  Verify OTP
                </Button>
              </Form.Item>
            )}
            <Form.Item
              name="password"
              label="Password"
              rules={[
                {
                  required: true,
                  message: "Please input your new password!",
                },
              ]}
              hasFeedback
            >
              <Input.Password placeholder="******" />
            </Form.Item>

            <Form.Item
              name="confirmpass"
              label="Confirm Password"
              // dependencies={["password"]}
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
                      new Error(
                        "The new password that you entered do not match!"
                      )
                    );
                  },
                }),
              ]}
            >
              <Input.Password placeholder="******" disabled={!otpVerified} />
            </Form.Item>

            <Form.Item {...tailFormItemLayout}>
              <Button
                type="primary"
                htmlType="submit"
                className="max-w-fit px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-full"
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </main>
  );
};
