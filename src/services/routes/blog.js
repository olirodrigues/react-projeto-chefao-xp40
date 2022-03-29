import { apiMee } from "../api/apiConfig";

export const getBlogPost = async () => {
  try {
    const response = await apiMee.get(`/blog`);
    return response.data;
  } catch (error) {
    console.error(`Ocorreu um erro ${error}`);
  }
};

export const getBlogPostId = async (postId) => {
  try {
    const response = await apiMee.get(`/blog/${postId}`);
    return response.data;
  } catch (error) {
    console.error(`Ocorreu um erro ${error}`);
  }
};
