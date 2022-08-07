import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Favorites from "./pages/Favorites";
import SearchPage from "./pages/SearchPage";
import SingleMovie from "./pages/SingleMovie";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { MovieProvider } from "./context";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MovieProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/movie/:id" element={<SingleMovie />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </MovieProvider>
  </React.StrictMode>
);
