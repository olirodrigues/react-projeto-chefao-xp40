import Axios from "axios";
import { TOKEN_API_MEE } from "../configs/keyApiMee";

const url =
  "https://api-chefao.herokuapp.com/" || "https://api-mee.herokuapp.com";

export const apiMee = Axios.create({
  baseURL: url,
  headers: {
    Authorization: TOKEN_API_MEE,
  },
});
