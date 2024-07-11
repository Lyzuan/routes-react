import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Produtos from "../Pages/Produtos";
import PageLayout from "../Layouts/PageLayout";
import NotFound from "../Pages/NotFound";
import Produto from "../Pages/Produto";
import About from "../Pages/About";
import Contact from "../Pages/Contact";



const Paths = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<PageLayout />}>
                        <Route index element={<Home />} />
                        <Route path="/produtos" element={<Produtos />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/produto/:id/:nome" element={<Produto />} />
                    </Route>
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default Paths;