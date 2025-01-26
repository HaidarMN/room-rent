import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import "./assets/css/index.css";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/effect-coverflow";

// Layouts
import MainLayout from "./layouts/MainLayout.tsx";

// Pages
import Home from "./pages/Home.tsx";

// 404
import NotFound from "./NotFound.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<NotFound />} />

      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  </BrowserRouter>,
);
