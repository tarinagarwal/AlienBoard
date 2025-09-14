import { Routes, Route, Navigate } from "react-router-dom";
import { TRPCReactProvider } from "./trpc/react";
import { Toaster } from "./components/ui/toaster";
import DrawPage from "./pages/DrawPage";
import Home from "./pages/Home";

function App() {
  return (
    <TRPCReactProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/draw" element={<DrawPage />} />
      </Routes>
      <Toaster />
    </TRPCReactProvider>
  );
}

export default App;
