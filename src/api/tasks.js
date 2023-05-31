import axios from "axios";
import { BACKEND } from "../constants/url";

export const getAllTasks = async () => {
  try {
    const tasks = await axios.get(`${BACKEND}/task/all`);
    return tasks;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const addTask = async (text) => {
  try {
    const result = await axios.post(`${BACKEND}/task/add`, { text });
    return result;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const clearTasks = async () => {
  try {
    const result = await axios.options(`${BACKEND}/task/clear`);
    return result;
  } catch (error) {
    console.log(error);
    return error;
  }
};
