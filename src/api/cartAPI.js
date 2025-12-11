import axios from "axios";

const URL = "http://localhost:3000/cart";

export const getCart = () => axios.get(URL);
export const addToCart = (item) => axios.post(URL, item);
export const removeCartItem = (id) => axios.delete(`${URL}/${id}`);
export const updateCartItem = (id, data) => {
  return axios.put(`http://localhost:3000/cart/${id}`, data);
};
