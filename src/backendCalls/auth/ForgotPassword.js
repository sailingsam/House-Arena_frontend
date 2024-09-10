import axios from "axios";

export const ForgotPassword = async (values) => {
  try {
    const baseUrl = import.meta.env.VITE_BASE_URL_BACKEND;
    const res = await axios.post(`${baseUrl}/`, values, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res.data;
  } catch (error) {
    console.log(
      "error in ForgotPassword",
      error.response?.data || error.message
    );
    return error.response?.data || { success: false, message: error.message };
  }
};
export const SendOtp = async (email) => {
  try {
    const response = await fetch(
      `${
        import.meta.env.VITE_BASE_URL_BACKEND
      }/api/users/register/otp/send_otp`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      }
    );
    const data = await response.json();
    console.log("OTP sent:", data);
    return data;
  } catch (error) {
    return error.response?.data || { success: false, message: error.message };
  }
};

export const VerifyOtp = async (email, otpentered) => {
  try {
    const response = await fetch(
      `${
        import.meta.env.VITE_BASE_URL_BACKEND
      }/api/users/register/otp/verify_otp`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, otp: otpentered }),
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error verifying OTP:", error);
    return error.response?.data || { success: false, message: error.message };
  }
};
