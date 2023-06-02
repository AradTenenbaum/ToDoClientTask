import axios from "axios";
import { BACKEND } from "../constants/url";
import { tasksDto } from "../utils/format";

axios.defaults.withCredentials = true;

export const getAllTasks = async () => {
  try {
    const { data } = await axios.get(`${BACKEND}/task/all`);
    if (!data.error) tasksDto(data);
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const addTask = async (text) => {
  try {
    const { data } = await axios.post(
      `${BACKEND}/task/add`,
      { text },
      {
        // headers: {
        //   "content-type": "application/x-www-form-urlencoded",
        // },
      }
    );
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const setTaskCompletion = async (id) => {
  try {
    const { data } = await axios.put(`${BACKEND}/task/set-completion/${id}`, {
      // headers: {
      //   "content-Type": "application/json",
      // },
    });
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const clearTasks = async () => {
  try {
    const { data } = await axios.post(`${BACKEND}/task/clear`);
    if (!data.error) tasksDto(data);
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const getUser = async () => {
  try {
    await axios.get(`${BACKEND}/user`);
  } catch (error) {
    console.log(error);
  }
};
