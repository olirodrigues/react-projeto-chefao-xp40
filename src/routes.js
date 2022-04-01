import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Plantas from "./pages/Plantas";
import PlantasDetalhe from "./pages/PlantasDetalhe/PlantasDetalhe";
import Blog from "./pages/Blog";
import Sobrenos from "./pages/Sobrenos";
import Contato from "./pages/Contato";
import Footer from "./components/Footer/Footer";
import { useMediaQuery } from "react-responsive";
import MenuMobile from "./components/MenuMobile/MenuMobile";
import BlogId from "./pages/BlogId";

const Rotas = () => {
  const tablet = useMediaQuery({
    query: "(max-width:1024px)",
  });
  return (
    <Router>
      {!tablet ? <Header /> : <MenuMobile />}
      <main>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/plantas" element={<Plantas />}></Route>
          <Route
            path="/plantas/:categorias/:id"
            element={<PlantasDetalhe />}
          ></Route>
          <Route exact path="/blog" element={<Blog />}></Route>
          <Route exact path="/blog/:id" element={<BlogId />}></Route>
          <Route path="/sobrenos" element={<Sobrenos />}></Route>
          <Route path="/contato" element={<Contato />}></Route>
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default Rotas;
