import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/shared/Layout";
import { Toaster } from "./components/ui/sonner";
import BookService from "./pages/BookService";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import Signup from "./pages/Signup";
import UnderConstruction from "./pages/UnderConstruction";

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
            <Route path="/book-service" element={<BookService />} />
            <Route path="projects" element={<UnderConstruction />} />
            <Route path="blog" element={<UnderConstruction />} />
            <Route path="contact" element={<UnderConstruction />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="privacy-policy" element={<UnderConstruction />} />
            <Route path="terms-of-use" element={<UnderConstruction />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
