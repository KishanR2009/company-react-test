import axios from "axios";

export const createOrder = (order) => {
  return axios.post("http://localhost:3000/orders", order);
};
