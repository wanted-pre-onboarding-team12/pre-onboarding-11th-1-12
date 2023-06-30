import instance from "./config";
import { Auth } from "../models/api";

export const signInUser = async (data: Auth) => {
  try {
    const response = await instance.post("auth/signin", data);
    const token = response.data.access_token;
    localStorage.setItem("access_token", token);
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};
export const signUpUser = async (data: Auth) => {
  try {
    const response = await instance.post("auth/signup", data);
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};
