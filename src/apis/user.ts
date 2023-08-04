import { axiosInstance } from "./config";
import { TestId } from "../pages/Signin";

export const signUp = (data: Record<TestId["input"], string>) => {
  return axiosInstance({
    url: "auth/signup",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data,
  });
};
