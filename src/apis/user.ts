import { axiosInstance } from "./config";
import { TestId } from "../components/common/AuthForm";

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

export const userApis = {
  signup,
};
