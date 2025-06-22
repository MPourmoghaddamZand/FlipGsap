import { BrowserRouter, Routes, Route } from "react-router-dom";
import Gallery from "./Gallery";
import ProductDetail from "./ProductDetail";
import Test from "./Test";
import Tes2 from "./pages/Tes2";
import Animation from "./pages/Animation";
import Anim2 from "./pages/Anim2";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Test />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/gal" element={<Gallery />} />
        <Route path="/tes2" element={<Tes2 />} />
        <Route path="/anim" element={<Animation />} />
        <Route path="/anim2" element={<Anim2 />} />
      </Routes>
    </BrowserRouter>
  );
}
