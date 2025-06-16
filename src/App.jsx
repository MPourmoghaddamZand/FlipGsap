import { BrowserRouter, Routes, Route } from "react-router-dom";
import Gallery from "./Gallery";
import ProductDetail from "./ProductDetail";
import Test from "./Test";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Test />} />
        <Route path="/gal" element={<Gallery />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
