import { axiosInstance } from "./config";
import { TestId } from "../components/common/AuthForm";

export const statusCodeObj = {
  signup: 201,
  signin: 200,
};

const signup = (data: Record<TestId["input"], string>) => {
  return axiosInstance({
    url: "auth/signup",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data,
  });
};

const signin = (data: Record<TestId["input"], string>) => {
  return axiosInstance({
    url: "auth/signin",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data,
  });
};

export const userApis = {
  signup,
  signin,
};
