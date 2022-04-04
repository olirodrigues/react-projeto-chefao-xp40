import { apiMee } from "../api/apiConfig";

export const getSobrePostId = async (postId) => {
    try {
      const response = await apiMee.get(`/sobre/${postId}`);
      return response.data;
    } catch (error) {
      console.error(`Ocorreu um erro ${error}`);
    }
  };
  
  export const getFotosSobre= "https://gabezrodz.github.io/imagens-chefao-xp40/sobre/"