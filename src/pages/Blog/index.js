import "./estiloBlog.css";
import BlogListaPosts from "../../components/layout/Blog/ListaDePosts/BlogListaPosts";
import Texto from "../../components/shared/Texto/Texto";
import AnimacaoLoading from "../../components/layout/AnimacaoLoading/AnimacaoLoading";
import { getBlogPost } from "../../services/routes/blog";
import { useEffect, useState } from "react";

function Blog() {
  const [blogPosts, setBlogPosts] = useState(null);

  const getPosts = async () => {
    const response = await getBlogPost();
    setBlogPosts(response);
  };

  useEffect(() => {
    getPosts();
  }, []);

  if (blogPosts === null) {
    return <AnimacaoLoading />;
  }

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
