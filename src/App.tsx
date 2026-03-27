import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import BlogList from "./pages/BlogList.tsx";
import BlogPost from "./pages/BlogPost.tsx";
import ServicesPage from "./pages/ServicesPage.tsx";
import ServiceDetailPage from "./pages/ServiceDetailPage.tsx";
import PricesPage from "./pages/PricesPage.tsx";
import GalleryPage from "./pages/GalleryPage.tsx";
import NotFound from "./pages/NotFound.tsx";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import StickyContact from "./components/StickyContact";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop.tsx";

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <Routes location={location}>
      <Route path="/" element={<Index />} />
      <Route path="/blog" element={<BlogList />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
      <Route path="/paslaugos" element={<ServicesPage />} />
      <Route path="/paslaugos/:slug" element={<ServiceDetailPage />} />
      <Route path="/kainos" element={<PricesPage />} />
      <Route path="/galerija" element={<GalleryPage />} />
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar />
        <ScrollToTop />
        <AnimatedRoutes />
        <Footer />
        <StickyContact />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
