import axios from "axios";
const appAxios = axios.create({

  withCredentials: false,
  headers: {
    "Content-Type": "application/json",
  },
  //   Authorization: `Bearer: ${access_token}`,
});

export default appAxios;
