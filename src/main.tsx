import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import "./assets/css/index.css";
import "swiper/swiper-bundle.css";

// Layouts
import MainLayout from "./layouts/MainLayout.tsx";

// Pages
import Home from "./pages/Home.tsx";
import ContactUs from "./pages/ContactUs.tsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.tsx";
import TermsConditions from "./pages/TermsConditions.tsx";

// 404
import NotFound from "./NotFound.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<NotFound />} />

      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsConditions />} />
      </Route>
    </Routes>
  </BrowserRouter>,
);
