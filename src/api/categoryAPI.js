import axios from "axios";

const URL = "http://localhost:3000/categories"; 

export const getCategories = () => axios.get(URL);

export const getCategoriesById = (id) => axios.get(`${URL}/${id}`);

export const createCategory = (data) => axios.post(URL, data);

export const updateCategory = (id, data) => axios.put(`${URL}/${id}`, data);

export const deleteCategory = (id) => axios.delete(`${URL}/${id}`);
