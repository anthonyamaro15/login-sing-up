import axios from "axios";

const auth = () => {
  const token = localStorage.getItem("token");
  return axios.create({
    headers: {
      Authorization: token
    },

    baseURL: "https://spotify-suggest-be.herokuapp.com"
  });
};

export default auth;
