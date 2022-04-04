import Axios from "axios";
import { TOKEN_API_MEE } from "../configs/keyApiMee";

const url1 = "https://api-chefao.herokuapp.com";
const url2 = "https://api-mee.herokuapp.com";

export const apiMee = Axios.create({
  baseURL: url1 || url2,
  headers: {
    Authorization: TOKEN_API_MEE,
  },
});

