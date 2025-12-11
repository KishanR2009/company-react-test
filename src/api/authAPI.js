import axios from "axios";

const URL = "http://localhost:3000/users";

export const registerUser = (data) => axios.post(URL, data);

export const findUserByEmail = (email) =>
  axios.get(`${URL}?email=${encodeURIComponent(email)}`);

export const findUserByEmailAndPassword = (email, password) =>
  axios.get(
    `${URL}?email=${encodeURIComponent(email)}&password=${encodeURIComponent(
      password
    )}`
  );
