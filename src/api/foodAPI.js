import axios from "axios";

const URL = "http://localhost:3000/foods";

export const getFoods = () => axios.get(URL);

export const getFoodsById = (id) => axios.get(`${URL}/${id}`);

export const createFood = (data) => axios.post(URL, data);

export const updateFood = (id, data) => axios.put(`${URL}/${id}`, data);

export const deleteFood = (id) => axios.delete(`${URL}/${id}`);
