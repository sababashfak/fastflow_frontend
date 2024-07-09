import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/shared/Layout";
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
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
