import "./estiloBlogId.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getBlogPostId } from "../../services/routes/blog";

function BlogId() {
  const { id } = useParams();
  const [posts, setPosts] = useState(null);

  const getDadosDoPost = async (paramsId) => {
    const response = await getBlogPostId(paramsId);
    setPosts(response);
  };

  useEffect(() => {
    getDadosDoPost(id);
  }, [id]);

  console.log(posts);

  return (
    <div>
      <h1>{posts !== null ? posts.post_titulo : "Carregando"}</h1>
    </div>
  );
}

export default BlogId;
