import { PostTodo } from "../models/api";
import instance from "./config";

export const getTodos = async () => {
  try {
    const response = await instance.get("/todos");
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const createTodo = async (data: PostTodo) => {
  try {
    const response = await instance.post("/todos", { data });
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const updateTodo = async (
  todo: string,
  isCompleted: boolean,
  id: number
) => {
  try {
    const response = await instance.put(`/todos/${id}`, {
      todo,
      isCompleted,
    });
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};
export const deleteTodo = async (id: number) => {
  try {
    const response = await instance.delete(`/todos/${id}`);
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};
