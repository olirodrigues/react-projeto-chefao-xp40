import Axios from "axios";
import { TOKEN_API_MEE } from "../configs/keyApiMee";

export const apiMee = Axios.create({
  baseURL: "https://api-mee.herokuapp.com",
  headers: {
    Authorization: TOKEN_API_MEE,
  },
});