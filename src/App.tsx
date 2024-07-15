import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/shared/Layout";
import UnderConstruction from "./components/shared/UnderConstruction";
import { Toaster } from "./components/ui/sonner";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" index element={<Home />} />
            <Route path="about" element={<UnderConstruction />} />
            <Route path="services" element={<UnderConstruction />} />
            <Route path="projects" element={<UnderConstruction />} />
            <Route path="blog" element={<UnderConstruction />} />
            <Route path="contact" element={<UnderConstruction />} />
            <Route path="login" element={<UnderConstruction />} />
            <Route path="privacy-policy" element={<UnderConstruction />} />
            <Route path="terms-of-use" element={<UnderConstruction />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
