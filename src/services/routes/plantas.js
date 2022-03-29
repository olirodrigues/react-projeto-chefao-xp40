import { apiMee } from "../api/apiConfig";

export const getPlantas = async () => {
  try {
    const response = await apiMee.get("/plantas");
    return response.data;
  } catch (error) {
    console.error(`Ocorreu um erro ${error}`);
  }
};

export const getPlantasCategorias = async (params) => {
  try {
    const response = await apiMee.get(`/plantas/${params}`);
    return response.data;
  } catch (error) {
    console.error(`Ocorreu um erro ${error}`);
  }
};

export const getPlantasId = async (params, id) => {
    try {
      const response = await apiMee.get(`/plantas/${params}/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Ocorreu um erro ${error}`);
    }
  };

export const getFotosPlantas =
  "https://gabezrodz.github.io/imagens-chefao-xp40/plantas/categorias/";

