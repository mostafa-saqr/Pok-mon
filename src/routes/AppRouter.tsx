import { BrowserRouter, Routes, Route } from "react-router";
import { lazy, Suspense } from "react";

// Lazy load components
const Home = lazy(() => import("../pages/Home"));
const PokemonDetailPage = lazy(() => import("../pages/PokemonDetailPage"));

// Loading component
const LoadingFallback = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      fontSize: "18px",
    }}
  >
    Loading...
  </div>
);

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemon/:id" element={<PokemonDetailPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
