import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import Home from './pages/Home'
import Header from './components/Header';
import Plantas from './pages/Plantas'
import Blog from "./pages/Blog";
import Sobrenos from "./pages/Sobrenos";
import Contato from "./pages/Contato";

const Rotas = () => {
    return(
      
        <Router>
            <Header/>
            <Routes>
                <Route exact path="/" element={<Home/>}></Route>
                <Route exact path="/plantas" element={<Plantas/>}></Route>
                <Route exact path="/blog" element={<Blog/>}></Route>
                <Route path="/sobrenos" element={<Sobrenos/>}></Route>
                <Route path="/contato" element={<Contato/>}></Route>
            </Routes>
        </Router>
    )
}

export default Rotas;