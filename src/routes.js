import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Plantas from "./pages/Plantas";
import PlantasDetalhe from "./pages/PlantasDetalhe/PlantasDetalhe";
import Blog from "./pages/Blog";
import SobreNos from "./pages/Sobrenos/SobreNos";
import Contato from "./pages/Contato/Contato";
import Footer from "./components/Footer/Footer";
import { useMediaQuery } from "react-responsive";
import MenuMobile from "./components/MenuMobile/MenuMobile";
import BlogPost from "./pages/BlogPost/index";
import PlantasCategorias from "./pages/PlantasCategorias/PlantasCetegorias";

const Rotas = () => {
  const tablet = useMediaQuery({
    query: "(max-width:1024px)",
  });
  return (
    <Router>
      {!tablet ? <Header /> : <MenuMobile />}
      <main>
        <Routes>
          <Route path="/*" element={<Home />}></Route>
          <Route path="/plantas" element={<Plantas />}></Route>
          <Route
            path="/plantas/:categorias"
            element={<PlantasCategorias />}
          ></Route>
          <Route
            path="/plantas/:categorias/:id"
            element={<PlantasDetalhe />}
          ></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/blog/:id" element={<BlogPost />}></Route>
          <Route
            path="/sobrenos"
            element={<Navigate to="/sobrenos/1" replace />}
          ></Route>
          <Route path="/sobrenos/:id" element={<SobreNos />}></Route>
          <Route path="/contato" element={<Contato />}></Route>
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default Rotas;
