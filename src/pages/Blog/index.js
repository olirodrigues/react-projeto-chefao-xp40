import { useEffect, useState } from "react";
import BlogListaPosts from "../../components/Blog/BlogListaDePosts/BlogListaPosts";
import { getBlogPost } from "../../services/routes/blog";
import "./estiloBlog.css";
import Texto from "../../components/Texto/Texto";

function Blog() {
  const [blogPosts, setBlogPosts] = useState([]);

  const getPosts = async () => {
    const response = await getBlogPost();
    setBlogPosts(response);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div id="main-content">
      <div className="container-blog">
        <div className="titulo-blog">
          <Texto tipo="titulo1" class="verde-escuro ">
            Blog
          </Texto>
        </div>
        <div className="container-posts">
          {blogPosts.map((post) => {
            return (
              <BlogListaPosts
                key={Math.random()}
                titulo={post.post_titulo}
                resumo={post.post_resumo}
                fotos={post.fotos_gerai}
                id={post.id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Blog;
