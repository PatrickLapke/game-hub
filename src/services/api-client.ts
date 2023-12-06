import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "f7d8d25f11ef4770a6ab85ef152955fa",
  },
});
